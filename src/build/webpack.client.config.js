const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
    entry: './src/entry-client.js',
    plugins: [
        new VueSSRClientPlugin()
    ],
    // optimization: {
    //     runtimeChunk: {
    //         name: 'manifest'
    //     },
    //     splitChunks: {
    //         maxInitialRequests: 10,
    //         cacheGroups: {
    //             common: {
    //                 name: 'common',
    //                 //chunks: 'all'
    //             }
    //         }
    //     }
    // }
})