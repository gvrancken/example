var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
              test: /\.(jpg|png|svg)$/,
              loader: 'file-loader',
              include : APP_DIR,
              options: {
                name: './assets/images/[hash].[ext]',
              }
            },
            {
              test: /\.mp3$/,
              loader: 'file-loader',
              include : APP_DIR,
              options: {
                name: './assets/sounds/[hash].[ext]',
              }
            },
            {
                test : /\.(js|jsx)$/,
                include : APP_DIR,
                loader : 'babel-loader',
                query: {
                    'presets' : ["es2015", "react"]
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                include : APP_DIR,
                loader: 'file-loader',
                options: {
                  name: './fonts/[hash].[ext]',
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: true,
            ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: './src/client/app/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{ from: './src/client/app/api', to: 'api' } ])
    ]
};

module.exports = config;
