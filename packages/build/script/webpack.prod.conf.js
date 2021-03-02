const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const { name } = require('../package.json');

const outputFolder = `/static-${name}/`;

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.join(__dirname, `../../static${outputFolder}`),
        publicPath: outputFolder,
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
        }),
    ],
});
