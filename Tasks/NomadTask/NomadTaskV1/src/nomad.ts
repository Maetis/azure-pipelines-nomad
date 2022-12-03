import { ToolRunner } from 'azure-pipelines-task-lib/toolrunner'
import { NomadBaseCommandInitializer } from './nomad-commands'

export interface INomadToolHandler {
    createToolRunner(command?: NomadBaseCommandInitializer): ToolRunner;
}

export class NomadToolHandler implements INomadToolHandler {
    private readonly tasks: any;
    
    constructor(tasks: any) {
        this.tasks = tasks;
    }

    public createToolRunner(command?: NomadBaseCommandInitializer): ToolRunner {
        let nomadPath;
        try {
            nomadPath = this.tasks.which("nomad", true);
        } catch(err) {
            throw new Error(this.tasks.loc("NomadToolNotFound"));
        }
        
        let nomadToolRunner: ToolRunner = this.tasks.tool(nomadPath);
        if (command) {
            nomadToolRunner.arg(command.name);
            if (command.additionalArgs) {
                nomadToolRunner.line(command.additionalArgs);
            }
        }

        return nomadToolRunner;
    }
}
