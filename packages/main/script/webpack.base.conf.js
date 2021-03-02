const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: true,
    context: path.resolve(__dirname, '../'),
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        chunkFilename: '[id].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: [
                        [
                            '@babel/plugin-proposal-decorators',
                            {
                                legacy: true,
                            },
                        ],
                        [
                            '@babel/plugin-proposal-class-properties',
                            {
                                loose: true,
                            },
                        ],
                    ],
                },
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        }),
    ],
};
