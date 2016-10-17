var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var testConfig = require('./webpack.unittest.js');

module.exports = webpackMerge(testConfig, {
    // If source map is needed, uncomment line below
    module: {
        postLoaders: [
            {
                test: /\.ts$/,
                include: helpers.root('src'),
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }
        ]
    },

    ts: {
        compilerOptions: {
            sourceMap: false,
            sourceRoot: './src',
            inlineSourceMap: true
        }
    }
});
