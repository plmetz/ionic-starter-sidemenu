/* tslint:disable */
var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
    var _config = {
        basePath: '../',

        frameworks: ['jasmine'],

        files: [
            {
                pattern: './test-config/karma-test-shim.js',
                watched: true
            },
            {
                pattern: './src/assets/**/*',
                watched: false,
                included: false,
                served: true,
                nocache: false
            }
        ],

        proxies: {
            '/assets/': '/base/src/assets/'
        },

        preprocessors: {
            './test-config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        browserConsoleLogOptions: {
            level: 'log',
            format: '%b %T: %m',
            terminal: false
        },

        coverageIstanbulReporter: {
            reports: ['html', 'text-summary', 'text', 'lcov'],
            fixWebpackSourcePaths: true
        },

        mochaReporter: {
            maxLogLines: 1
        },

        reporters: config.coverage ? ['mocha', 'coverage-istanbul', 'junit'] : ['mocha'],

        junitReporter: {
            outputDir: process.env.JUNIT_REPORT_PATH ? process.env.JUNIT_REPORT_PATH : 'coverage',
            outputFile: process.env.JUNIT_REPORT_NAME ? process.env.JUNIT_REPORT_NAME : 'junit-test-results.xml',
            useBrowserName: false
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false
    };

    config.set(_config);
};
