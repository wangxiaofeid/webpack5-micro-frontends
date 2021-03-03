const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const baseWebpackConfig = require('./webpack.base.conf');
const { dependencies: deps, name } = require('../package.json');

console.log(path.join(__dirname, '../src/Other'));

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: 'auto',
    },
    devServer: {
        port: 3001,
        contentBase: [path.join(__dirname, '../dist')],
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    plugins: [
        new ModuleFederationPlugin({
            name,
            filename: 'remoteEntry.js',
            remotes: {
                app1: 'app1@http://localhost:3002/remoteEntry.js',
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
