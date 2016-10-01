var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style/useable!css'
            },
            {
                test: /\.vue$/,
                loader: 'vue',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg)\w*/,
                loader: 'file'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
            css: 'vue-style!css!postcss'
        }
    },
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 5 versions']})
        ];
    },
    resolve: {
        root: [
            path.resolve(__dirname)
        ],
        extensions: [
            '',
            '.js',
            '.vue'
        ],
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('[hash].common.bundle.js'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html_vm',
            favicon: 'img/favicon.ico',
            hash: false
        })
    ]
};
