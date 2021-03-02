const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const baseWebpackConfig = require('./webpack.base.conf');
const { dependencies: deps, name } = require('../package.json');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: 'auto',
    },
    devServer: {
        port: 3002,
        contentBase: [path.join(__dirname, '../dist')],
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    plugins: [
        new ModuleFederationPlugin({
            name,
            filename: 'remoteEntry.js',
            remotes: {
                main: 'main@http://localhost:3001/remoteEntry.js',
            },
            exposes: {
                // './router': './src/router',
            },
            shared: [
                {
                    ...deps,
                    antd: { eager: true, singleton: true, requiredVersion: deps.antd },
                    history: { eager: true, singleton: true, requiredVersion: deps.history },
                    mobx: { eager: true, singleton: true, requiredVersion: deps.mobx },
                    'mobx-react': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps['mobx-react'],
                    },
                    react: { eager: true, singleton: true, requiredVersion: deps.react },
                    'react-dom': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps['react-dom'],
                    },
                    'react-router': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps['react-router'],
                    },
                    'react-router-dom': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps['react-router-dom'],
                    },
                },
                // Workaround explaination: https://www.youtube.com/watch?v=-LNcpralkjM&t=540
                // './src/Service',
            ],
        }),
    ],
});
