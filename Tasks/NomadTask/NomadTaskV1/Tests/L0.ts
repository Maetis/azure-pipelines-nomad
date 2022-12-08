import * as assert from 'assert';
import * as ttm from 'azure-pipelines-task-lib/mock-test';
import * as path from 'path';

describe('Nomad Test Suite', () => {

    before(() => {});

    after(() => {});

    /* nomad init tests */
    // it('aws init should succeed with no additional args', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './InitTests/AWS/AWSInitSuccessNoAdditionalArgs.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 1, 'tool should have been invoked one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSInitSuccessNoAdditionalArgsL0 should have succeeded.'), 'Should have printed: AWSInitSuccessNoAdditionalArgsL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws init should succeed with additional args', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './InitTests/AWS/AWSInitSuccessAdditionalArgs.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 1, 'tool should have been invoked one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSInitSuccessAdditionalArgsL0 should have succeeded.'), 'Should have printed: AWSInitSuccessAdditionalArgsL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws init should succeed with empty working directory', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './InitTests/AWS/AWSInitSuccessEmptyWorkingDir.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 1, 'tool should have been invoked one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSInitSuccessEmptyWorkingDirL0 should have succeeded.'), 'Should have printed: AWSInitSuccessEmptyWorkingDirL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws init should fail with invalid working directory', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './InitTests/AWS/AWSInitFailInvalidWorkingDirectory.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.failed, 'task should have failed');
    //         assert(tr.invokedToolCount === 1, 'tool should have been invoked one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 1, 'should have one error');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('There are some problems with the configuration, described below.\n\nThe Terraform configuration must be valid before initialization so that Terraform can determine which modules and providers need to be installed.'), 'Should have shown error message');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });
    
    /* nomad validate tests */

    // it('aws validate should succeed with no additional args', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ValidateTests/AWS/AWSValidateSuccessNoAdditionalArgs.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 1, 'tool should have been invoked one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSValidateSuccessNoAdditionalArgsL0 should have succeeded.'), 'Should have printed: AWSValidateSuccessNoAdditionalArgsL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws validate should succeed with additional args', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ValidateTests/AWS/AWSValidateSuccessAdditionalArgs.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 1, 'tool should have been invoked one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSValidateSuccessAdditionalArgsL0 should have succeeded.'), 'Should have printed: AWSValidateSuccessAdditionalArgsL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws validate should succeed with empty working directory', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ValidateTests/AWS/AWSValidateSuccessEmptyWorkingDir.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 1, 'tool should have been invoked one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSValidateSuccessEmptyWorkingDirL0 should have succeeded.'), 'Should have printed: AWSValidateSuccessEmptyWorkingDirL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws validate should fail with invalid working directory', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ValidateTests/AWS/AWSValidateFailInvalidWorkingDirectory.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.failed, 'task should have failed');
    //         assert(tr.invokedToolCount === 1, 'tool should have been invoked one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 1, 'should have one error');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('Execution failed: invalid config files'), 'Should have shown error message');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    /* nomad plan tests */

    // it('plan should succeed with no additional args', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './PlanTests/AWS/AWSPlanSuccessNoAdditionalArgs.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSPlanSuccessNoAdditionalArgsL0 should have succeeded.'), 'Should have printed: AWSPlanSuccessNoAdditionalArgsL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('plan should succeed with additional args', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './PlanTests/AWS/AWSPlanSuccessAdditionalArgs.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSPlanSuccessAdditionalArgsL0 should have succeeded.'), 'Should have printed: AWSPlanSuccessAdditionalArgsL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('plan should fail with invalid working directory', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './PlanTests/AWS/AWSPlanFailInvalidWorkingDirectory.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.failed, 'task should have failed');
    //         assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 1, 'should have one error');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('Execution failed: invalid config files'), 'Should have shown error message');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    it('plan should fail with empty working directory', (done: Mocha.Done) => {
        let tp = path.join(__dirname, './PlanTests/PlanFailEmptyWorkingDirectory.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
        try {
            tr.run();

            assert(tr.failed, 'task should have failed');
            assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
            assert(tr.errorIssues.length === 1, 'should have one error');
            assert(tr.warningIssues.length === 0, 'should have no warnings');
            assert(tr.stdOutContained('Error: No configuration files'), 'Should have shown error message');

            done();
        } catch(error) {
            done(error);
        }
    });

    /* nomad apply tests */

    // it('aws apply should succeed with no additional args', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ApplyTests/AWS/AWSApplySuccessNoAdditionalArgs.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 3, 'tool should have been invoked three times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSApplySuccessNoAdditionalArgsL0 should have succeeded.'), 'Should have printed: AWSApplySuccessNoAdditionalArgsL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws apply should succeed with additional args with -auto-approve', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ApplyTests/AWS/AWSApplySuccessAdditionalArgsWithAutoApprove.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 3, 'tool should have been invoked three times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSApplySuccessAdditionalArgsWithAutoApproveL0 should have succeeded.'), 'Should have printed: AWSApplySuccessAdditionalArgsWithAutoApproveL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws apply should succeed with additional args without -auto-approve', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ApplyTests/AWS/AWSApplySuccessAdditionalArgsWithoutAutoApprove.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 3, 'tool should have been invoked three times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSApplySuccessAdditionalArgsWithoutAutoApproveL0 should have succeeded.'), 'Should have printed: AWSApplySuccessAdditionalArgsWithoutAutoApproveL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws apply should fail with invalid working directory', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ApplyTests/AWS/AWSApplyFailInvalidWorkingDirectory.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.failed, 'task should have failed');
    //         assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 1, 'should have one error');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('Execution failed: invalid config files'), 'Should have shown error message');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws apply should fail with empty working directory', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './ApplyTests/AWS/AWSApplyFailEmptyWorkingDirectory.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.failed, 'task should have failed');
    //         assert(tr.invokedToolCount === 3, 'tool should have been invoked three times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 1, 'should have one error');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('Error: No configuration files'), 'Should have shown error message');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    /* nomad destroy tests */

    // it('aws destroy should succeed with no additional args', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './DestroyTests/AWS/AWSDestroySuccessNoAdditionalArgs.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSDestroySuccessNoAdditionalArgsL0 should have succeeded.'), 'Should have printed: AWSDestroySuccessNoAdditionalArgsL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws destroy should succeed with additional args with -auto-approve', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './DestroyTests/AWS/AWSDestroySuccessAdditionalArgsWithAutoApprove.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSDestroySuccessAdditionalArgsWithAutoApproveL0 should have succeeded.'), 'Should have printed: AWSDestroySuccessAdditionalArgsWithAutoApproveL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws destroy should succeed with additional args without -auto-approve', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './DestroyTests/AWS/AWSDestroySuccessAdditionalArgsWithoutAutoApprove.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('AWSDestroySuccessAdditionalArgsWithoutAutoApproveL0 should have succeeded.'), 'Should have printed: AWSDestroySuccessAdditionalArgsWithoutAutoApproveL0 should have succeeded.');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('aws destroy should fail with invalid working directory', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './DestroyTests/AWS/AWSDestroyFailInvalidWorkingDirectory.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.failed, 'task should have failed');
    //         assert(tr.invokedToolCount === 2, 'tool should have been invoked two times. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 1, 'should have one error');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');
    //         assert(tr.stdOutContained('Execution failed: invalid config files'), 'Should have shown error message');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    /* test for multiple providers */

    // it('warnIfMultipleProviders should not warn for single provider', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './MultipleProviderTests/SingleProviderNoWarning.js');
    //     let tr : ttm.MockTestRunner = new ttm.MockTestRunner(tp);

    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 1, 'should have invoked tool one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 0, 'should have no warnings');    

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    // it('warnIfMultipleProviders should warn correctly for multiple providers', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './MultipleProviderTests/MultipleProviderWarning.js');
    //     let tr : ttm.MockTestRunner = new ttm.MockTestRunner(tp);

    //     try {
    //         tr.run();

    //         assert(tr.succeeded, 'task should have succeeded');
    //         assert(tr.invokedToolCount === 1, 'should have invoked tool one time. actual: ' + tr.invokedToolCount);
    //         assert(tr.errorIssues.length === 0, 'should have no errors');
    //         assert(tr.warningIssues.length === 1, 'should have one warning');  
    //         assert(tr.createdWarningIssue('Multiple provider blocks specified in the .tf files in the current working directory.'), 'Should have created warning: Multiple provider blocks specified in the .tf files in the current working drectory.');  

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

    /* test for compareVersions method of BaseTerraformCommandHandler class */

    // it('compareVersions should compare two versions correctly', (done: MochaDone) => {
    //     let tp = path.join(__dirname, './L0CompareVersions.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    //     try {
    //         tr.run();

    //         assert(tr.stdOutContained('compareVersions("0.20.7", "0.20.8") should have been -1') , 'Should have printed: compareVersions("0.20.7", "0.20.8") should have been -1'+tr.stdout);
    //         assert(tr.stdOutContained('compareVersions("0.20.9", "0.20.8") should have been 1') , 'Should have printed: compareVersions("0.20.9", "0.20.8") should have been 1');
    //         assert(tr.stdOutContained('compareVersions("0.2.9", "0.2.9") should have been 0') , 'Should have printed: compareVersions("0.2.9", "0.2.9") should have been 0');
    //         assert(tr.stdOutContained('compareVersions("0.20.9", "0.20.09") should have been 0') , 'Should have printed: compareVersions("0.20.9", "0.20.09") should have been 0');
    //         assert(tr.stdOutContained('compareVersions("0.21.9", "0.20.9") should have been 1') , 'Should have printed: compareVersions("0.21.9", "0.20.9") should have been 1');
    //         assert(tr.stdOutContained('compareVersions("1.20.10", "0.20.11") should have been 1') , 'Should have printed: compareVersions("1.20.10", "0.20.11") should have been 1');

    //         done();
    //     } catch(error) {
    //         done(error);
    //     }
    // });

});