const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html'
});

const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
    devServer: {
        open: true,
    },
    plugins: [
        htmlPlugin,
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
}