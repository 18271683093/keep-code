const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin")
 

module.exports = {
    entry: './src/entry-client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader',
                    },
                    cssSourceMap: true,
                    cacheBusting: false,
                    transformToRequire: {
                        video: 'src',
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            }]
    },
    mode: 'development',
    plugins:[
        new VueLoaderPlugin(),

    ]
};