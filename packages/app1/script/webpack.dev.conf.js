const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const baseWebpackConfig = require('./webpack.base.conf');
const { dependencies: deps, name } = require('../package.json');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    // mode: 'production',
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
                basic: 'basic@http://localhost:3001/remoteEntry.js',
                // basic: 'basic@http://127.0.0.1:8080/static-basic/remoteEntry.js',
            },
            exposes: {
                './router': './src/router',
            },
            shared: {
                ...deps,
                react: { singleton: true, requiredVersion: deps.react },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
    ],
});
