
module.exports = function (config) {
    
    if(!config.debug){
        config.debug = false;    
    }
    var _config = {
        basePath: '',

        debug: config.debug,

        frameworks: ['jasmine'],

        files: [
            { pattern: './config/karma-test-shim.js', watched: false }
        ],

        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap'],
        },

        webpack: config.debug ? require('./webpack.unittest') : require('./webpack.unittest-coverage'),

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        coverageReporter: {
            dir: 'testresults',
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
            src: 'testresults/json/coverage-final.json',
            reports: {
                // use this also when lcov file is needed from other tools
                //lcovonly: 'coverage/json/lcov.info',
                html: 'testresults/html',
                'text-summary': null
            },
            timeoutNotCreated: 1000, // default value
            timeoutNoMoreFiles: 1000 // default value
        },

        mochaReporter: {
            output: 'autowatch',
            colors: {
                error: 'white'
            }
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
        reporters: config.debug ? ['mocha'] : ['mocha', 'coverage', 'karma-remap-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: !config.debug,
        browsers: config.debug ? ['Chrome'] : ['PhantomJS'],
        singleRun: false
    };

    config.set(_config);
};
