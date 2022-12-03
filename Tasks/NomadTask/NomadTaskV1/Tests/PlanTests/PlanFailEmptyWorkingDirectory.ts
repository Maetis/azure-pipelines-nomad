import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let tp = path.join(__dirname, './PlanFailEmptyWorkingDirectoryL0.js');
let tr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(tp);

tr.setInput('provider', 'aws');
tr.setInput('command', 'plan');
tr.setInput('workingDirectory', 'DummyWorkingDirectory');
tr.setInput('environmentServiceName', 'AWS');
tr.setInput('commandOptions', '-no-color');

process.env['ENDPOINT_AUTH_SCHEME_AWS'] = 'Basic';
process.env['ENDPOINT_AUTH_PARAMETER_AWS_USERNAME'] = 'DummyUsername';
process.env['ENDPOINT_AUTH_PARAMETER_AWS_PASSWORD'] = 'DummyPassword';
process.env['ENDPOINT_AUTH_PARAMETER_AWS_REGION'] = 'DummyRegion';

let a: ma.TaskLibAnswers = <ma.TaskLibAnswers> {
    "which": {
        "nomad": "nomad"
    },
    "checkPath": {
        "nomad": true
    },
    "exec": {
        "nomad providers": {
            "code": 0,
            "stdout": "provider aws"
        },
        "nomad plan -no-color": {
            "code": 1,
            "stdout": "Error: No configuration files"
        }
    }
}

tr.setAnswers(a);
tr.run();