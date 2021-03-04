const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const baseWebpackConfig = require('./webpack.base.conf');
const { dependencies: deps, name } = require('../package.json');

const outputFolder = `/static-${name}/`;

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.join(__dirname, `../../../static${outputFolder}`),
        publicPath: 'auto',
    },
    optimization: {
        chunkIds: 'named',
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name,
            filename: 'remoteEntry.js',
            remotes: {
                app1: 'app1@/static-app1/remoteEntry.js',
            },
            exposes: {
                './Layout': './src/Layout',
                './utils': './src/utils',
            },
            shared: [
                {
                    ...deps,
                    react: { singleton: true, requiredVersion: deps.react },
                    'react-dom': {
                        singleton: true,
                        requiredVersion: deps['react-dom'],
                    },
                },
            ],
        }),
    ],
});
