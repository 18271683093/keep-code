'use strict'

const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const config = require('../config')

const router = new Router()
router.prefix('/api')
router.get('/login', (ctx, next) => {
   let token = jwt.sign({
        data: "123456",
        // 设置 token 过期时间
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
    }, config.secret)
    ctx.result = token;
    // ctx.response.set('token', token);
    ctx.cookies.set('token', token);
    return next()
})

module.exports = router