var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
   entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/app.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.css', '.scss']
    },    

    module: {

        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ],

        loaders: [
             {
                test: /\.ts$/,
                loader: 'ts!angular2-template-loader',
                exclude: /\.(spec)\.ts$/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },            
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap')
            },
            {
                test: /\.scss$/,
                include: helpers.root('src', 'app'),
                loader: 'exports-loader?module.exports.toString()!css!resolve-url!sass?sourceMap'
            }
        ]
    },

    sassLoader: {
        includePaths: ["./public/css"]
    },

    tslint: {
        emitErrors: false,
        failOnHint: false
    },

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new webpack.ProvidePlugin({
            _: 'underscore'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
