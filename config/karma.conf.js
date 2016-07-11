var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            { pattern: './config/karma-test-shim.js', watched: false }
        ],

        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        coverageReporter: {
            dir: 'coverage',
            subdir: '.',
            reporters: [
                {
                    type: 'json',
                    subdir: 'json',
                    file: 'coverage-final.json'
                }
            ]
        },

        remapIstanbulReporter: {
            src: 'coverage/json/coverage-final.json',
            reports: {
                // use this also when lcov file is needed from other tools
                //lcovonly: 'coverage/json/lcov.info',
                html: 'coverage/html',
                'text': null
            },
            timeoutNotCreated: 1000, // default value
            timeoutNoMoreFiles: 1000 // default value
        },

        mochaReporter: {
            output: 'autowatch'
        },

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-mocha-reporter',
            'karma-remap-istanbul'
        ],
        reporters: ['mocha', 'coverage', 'karma-remap-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    };

    config.set(_config);
};
