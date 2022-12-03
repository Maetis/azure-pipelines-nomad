import { NomadCommandHandler } from '../../src/nomad-command-handler';
import tl = require('azure-pipelines-task-lib');

let nomadCommandHandler: NomadCommandHandler = new NomadCommandHandler();

export async function run() {
    try {
        await nomadCommandHandler.plan();
    } catch(error) {
        tl.setResult(tl.TaskResult.Failed, 'PlanFailEmptyWorkingDirectoryL0 should have succeeded but failed with error.');
    }
}

run();