import tasks = require('azure-pipelines-task-lib/task');
import tools = require('azure-pipelines-tool-lib/tool');
import { ToolRunner } from 'azure-pipelines-task-lib/toolrunner';
import path = require('path');
import * as installer from './nomad-installer';

async function configureNomad() {
    let inputVersion = tasks.getInput("nomadVersion", true);
    let nomadPath = await installer.downloadNomad(inputVersion);
    let envPath = process.env['PATH'];

    // Prepend the tools path. Instructs the agent to prepend for future tasks
    if (envPath && !envPath.startsWith(path.dirname(nomadPath))) {
        tools.prependPath(path.dirname(nomadPath));
    }
}

async function verifyNomad() {
    console.log(tasks.loc("VerifyNomadInstallation"));
    let nomadPath = tasks.which("nomad", true);
    let nomadTool : ToolRunner = tasks.tool(nomadPath);
    nomadTool.arg("version");
    return nomadTool.exec();
}

async function run() {
    tasks.setResourcePath(path.join(__dirname, '..', 'task.json'));

    try {
        await configureNomad();
        await verifyNomad();
        tasks.setResult(tasks.TaskResult.Succeeded, "");
    } catch (error) {
        tasks.setResult(tasks.TaskResult.Failed, error);
    }
}

run();