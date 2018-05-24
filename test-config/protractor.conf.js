// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// tslint:disable:no-empty

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        '../e2e/**/*.e2e-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });

        require('connect')().use(require('serve-static')('www')).listen(4200);
    },
    onPrepare() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
            verbosity: 3,
            color: true,
            showStack: true
        }));
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            savePath: process.env.JUNIT_REPORT_PATH ? process.env.JUNIT_REPORT_PATH : 'coverage/e2e',
            outputFile: process.env.JUNIT_REPORT_NAME ? process.env.JUNIT_REPORT_NAME : 'junit_e2e_results.xml',
            consolidateAll: true
        }));
    }
};
