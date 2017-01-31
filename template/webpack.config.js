const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: {
        index: './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'){{#if_eq mode 'history'}},
        historyApiFallback: true{{/if_eq}}
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader/useable','css-loader']
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader?{"presets":[["es2015", {"modules": false}]],"plugins": ["transform-object-rest-spread"]}',
                            css: 'vue-style-loader!css-loader!postcss-loader'
                        }
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}]],
                        plugins: ['transform-object-rest-spread']
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg)\w*/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname)
        ],
        extensions: [
            '.js',
            '.vue'
        ],
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    },
    plugins: [
        new DashboardPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html_vm',
            favicon: 'img/favicon.ico',
            hash: false
        })
    ]
};
