var helpers = require('./helpers');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {

        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts!angular2-template-loader'
            },
            {
                test: /\.html$/,
                loader: 'html'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                exclude: helpers.root('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.scss$/,
                include: helpers.root('src', 'app'),
                loader: 'exports-loader?module.exports.toString()!css!resolve-url!sass?sourceMap'
            }
        ]
    },

    sassLoader: {
        includePaths: ["./public/styles"]
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
        })
    ]
};
