import {NomadToolHandler, INomadToolHandler} from './nomad';
import {ToolRunner, IExecOptions, IExecSyncOptions, IExecSyncResult} from 'azure-pipelines-task-lib/toolrunner';
import {NomadBaseCommandInitializer, NomadAuthorizationCommandInitializer} from './nomad-commands';
import tasks = require('azure-pipelines-task-lib/task');
import path = require('path');
import * as uuidV4 from 'uuid/v4';
const fs = require('fs');
//const del = require('del');

export abstract class BaseNomadCommandHandler {
    providerName: string;
    nomadToolHandler: INomadToolHandler;
    backendConfig: Map<string, string>;

    abstract handleBackend(nomadToolRunner: ToolRunner);
    abstract handleProvider(command: NomadAuthorizationCommandInitializer);
    
    constructor() {
        this.providerName = "";
        this.nomadToolHandler = new NomadToolHandler(tasks);
        this.backendConfig = new Map<string, string>();
    }

    public compareVersions(version1: string, version2: string) {
        let versionNumbers1: string[] = version1.split('.');
        let versionNumbers2: string[] = version2.split('.');

        const smallerLength = Math.min(versionNumbers1.length, versionNumbers2.length);
        
        let versionNumbersInt1: number[] = new Array(smallerLength);
        let versionNumbersInt2: number[] = new Array(smallerLength);
        
        for (let i = 0; i < smallerLength; i++) {
            versionNumbersInt1[i] = parseInt(versionNumbers1[i], 10);
            versionNumbersInt2[i] = parseInt(versionNumbers2[i], 10);
            if (versionNumbersInt1[i] > versionNumbersInt2[i]) return 1;
            if (versionNumbersInt1[i] < versionNumbersInt2[i]) return -1;        
        }

        return versionNumbersInt1.length == versionNumbersInt2.length ? 0: (versionNumbersInt1.length < versionNumbersInt2.length ? -1 : 1);
    }

    public warnIfMultipleProviders(): void {
        let nomadPath;
        try {
            nomadPath = tasks.which("nomad", true);
        } catch(err) {
            throw new Error(tasks.loc("NomadToolNotFound"));
        }

        let nomadToolRunner: ToolRunner = tasks.tool(nomadPath);
        nomadToolRunner.arg("providers");
        let commandOutput = nomadToolRunner.execSync(<IExecSyncOptions>{
            cwd: tasks.getInput("workingDirectory")
        });

        let countProviders = ["aws", "azurerm", "google"].filter(provider => commandOutput.stdout.includes(provider)).length;
        
        tasks.debug(countProviders.toString());
        if (countProviders > 1) {
            tasks.warning("Multiple provider blocks specified in the .tf files in the current working directory.");
        }
    }

    public getServiceProviderNameFromProviderInput(): string {
        let provider: string = tasks.getInput("provider", true);
        
        switch (provider) {
            case "azurerm": return "AzureRM";
            case "aws"    : return "AWS";
            case "gcp"    : return "GCP";
        }
    }

    public async init(): Promise<number> {
        let initCommand = new NomadBaseCommandInitializer(
            "init",
            tasks.getInput("workingDirectory"),
            tasks.getInput("commandOptions")
        );
        
        let nomadTool;
        
        nomadTool = this.nomadToolHandler.createToolRunner(initCommand);
        this.handleBackend(nomadTool);
        
        return nomadTool.exec(<IExecOptions> {
            cwd: initCommand.workingDirectory
        });
    }
    public async show(): Promise<number> {
        let serviceName = `environmentServiceName${this.getServiceProviderNameFromProviderInput()}`;
        let cmd;
        const outputTo = tasks.getInput("outputTo");
        const outputFormat = tasks.getInput("outputFormat");
        if (outputFormat == "json"){
                cmd = tasks.getInput("commandOptions") != null ? `-json  ${tasks.getInput("commandOptions")}`:`-json`;
            }else{
                cmd = tasks.getInput("commandOptions") != null ? tasks.getInput("commandOptions"):``;
            }
    
        let showCommand = new NomadAuthorizationCommandInitializer(
            "show",
            tasks.getInput("workingDirectory"),
            tasks.getInput(serviceName, true),
            cmd
        );
        let nomadTool;
        nomadTool = this.nomadToolHandler.createToolRunner(showCommand);
        this.handleProvider(showCommand);
        
        if(outputTo == "console"){
            return nomadTool.exec(<IExecOptions> {
            cwd: showCommand.workingDirectory});
        }else if(outputTo == "file"){
            const showFilePath = path.resolve(tasks.getInput("filename"));
            let commandOutput = await nomadTool.execSync(<IExecSyncOptions> {
                cwd: showCommand.workingDirectory,
            });
            
            tasks.writeFile(showFilePath, commandOutput.stdout);
            tasks.setVariable('showFilePath', showFilePath);
            
            return commandOutput;
        }
    }
    public async output(): Promise<number> {
        let serviceName = `environmentServiceName${this.getServiceProviderNameFromProviderInput()}`;
        let additionalArgs: string = `-json`
        let commandOptions = tasks.getInput("commandOptions") != null ? `${tasks.getInput("commandOptions")} -json`:`-json`
        
        let outputCommand = new NomadAuthorizationCommandInitializer(
            "output",
            tasks.getInput("workingDirectory"),
            tasks.getInput(serviceName, true),
            commandOptions
        );

        let nomadTool;
        nomadTool = this.nomadToolHandler.createToolRunner(outputCommand);
        this.handleProvider(outputCommand);

        const jsonOutputVariablesFilePath = path.resolve(`output-${uuidV4()}.json`);
        let commandOutput = await nomadTool.execSync(<IExecSyncOptions>{
            cwd: outputCommand.workingDirectory,
        });

        tasks.writeFile(jsonOutputVariablesFilePath, commandOutput.stdout);
        tasks.setVariable('jsonOutputVariablesPath', jsonOutputVariablesFilePath);

        return commandOutput;
    

    }
    
    public async plan(): Promise<number> {
        this.warnIfMultipleProviders();
        let serviceName = `environmentServiceName${this.getServiceProviderNameFromProviderInput()}`;
        let commandOptions = tasks.getInput("commandOptions") != null ? `${tasks.getInput("commandOptions")} -detailed-exitcode`:`-detailed-exitcode`
        let planCommand = new NomadAuthorizationCommandInitializer(
            "plan",
            tasks.getInput("workingDirectory"),
            tasks.getInput(serviceName, true),
            commandOptions
        );
        
        let nomadTool;
        nomadTool = this.nomadToolHandler.createToolRunner(planCommand);
        this.handleProvider(planCommand);
    
        let result = await nomadTool.exec(<IExecOptions> {
            cwd: planCommand.workingDirectory,
            ignoreReturnCode: true
        });

        if (result !== 0 && result !== 2) {
            throw new Error(tasks.loc("NomadPlanFailed", result));
        }
        tasks.setVariable('changesPresent', (result === 2).toString(), false, true);
        return result;
    }

    public async custom(): Promise<number> {
        const outputTo = tasks.getInput("outputTo");
        let serviceName = `environmentServiceName${this.getServiceProviderNameFromProviderInput()}`;
        let customCommand = new NomadAuthorizationCommandInitializer(
            tasks.getInput("customCommand"),
            tasks.getInput("workingDirectory"),
            tasks.getInput(serviceName, true),
            tasks.getInput("commandOptions")
        );
        
        let nomadTool;
        nomadTool = this.nomadToolHandler.createToolRunner(customCommand);
        this.handleProvider(customCommand);


        if(outputTo == "console"){
            return nomadTool.exec(<IExecOptions> {
            cwd: customCommand.workingDirectory});
        }else if(outputTo == "file"){
            const customFilePath = path.resolve(tasks.getInput("filename"));
            let commandOutput = await nomadTool.execSync(<IExecSyncOptions> {
                cwd: customCommand.workingDirectory});
            
            tasks.writeFile(customFilePath, commandOutput.stdout);
            tasks.setVariable('customFilePath', customFilePath);
            return commandOutput;
            }
    }

    public async apply(): Promise<number> {
        let nomadTool;
        this.warnIfMultipleProviders();
        let serviceName = `environmentServiceName${this.getServiceProviderNameFromProviderInput()}`;
        let autoApprove: string = '-auto-approve';
        let additionalArgs: string = tasks.getInput("commandOptions") || autoApprove;

        if (additionalArgs.includes(autoApprove) === false) {
            additionalArgs = `${autoApprove} ${additionalArgs}`;
        }

        let applyCommand = new NomadAuthorizationCommandInitializer(
            "apply",
            tasks.getInput("workingDirectory"),
            tasks.getInput(serviceName, true),
            additionalArgs
        );

        nomadTool = this.nomadToolHandler.createToolRunner(applyCommand);
        this.handleProvider(applyCommand);

        return nomadTool.exec(<IExecOptions> {
            cwd: applyCommand.workingDirectory
        });
    }

        public async destroy(): Promise<number> {
        this.warnIfMultipleProviders();
        let serviceName = `environmentServiceName${this.getServiceProviderNameFromProviderInput()}`;
        let autoApprove: string = '-auto-approve';
        let additionalArgs: string = tasks.getInput("commandOptions") || autoApprove;

        if (additionalArgs.includes(autoApprove) === false) {
            additionalArgs = `${autoApprove} ${additionalArgs}`;
        }

        let destroyCommand = new NomadAuthorizationCommandInitializer(
            "destroy",
            tasks.getInput("workingDirectory"),
            tasks.getInput(serviceName, true),
            additionalArgs
        );

        let nomadTool;
        nomadTool = this.nomadToolHandler.createToolRunner(destroyCommand);
        this.handleProvider(destroyCommand);

        return nomadTool.exec(<IExecOptions> {
            cwd: destroyCommand.workingDirectory
        });
    };

    public async validate(): Promise<number> {
        let validateCommand = new NomadBaseCommandInitializer(
            "validate",
            tasks.getInput("workingDirectory"),
            tasks.getInput("commandOptions")
        );

        let nomadTool;
        nomadTool = this.nomadToolHandler.createToolRunner(validateCommand);
        

        return nomadTool.exec(<IExecOptions>{
            cwd: validateCommand.workingDirectory
        });
    }
}
