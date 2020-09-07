'use strict'
const path = require('path')
module.exports = {
    isDev: process.env.NODE_ENV === 'production' ? false : true,
    assetsPublicPath: "/",
    port: '10100',
    secret: 'secret',
    publicDir: path.resolve(__dirname, './src/dist'),
    logPath: path.resolve(__dirname, '../logs/koa-template.log'),
    mongoDB: {
        database: 'mall',
        username: 'root',
        password: 'root',
        host: '127.0.0.1',
        port: 27017
    }
}
