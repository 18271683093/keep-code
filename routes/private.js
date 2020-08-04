
'use strict'
 
const Router = require('koa-router')
const controllers = require('../controllers')
const jwtMiddleware = require('../middlewares/jwt')
 
const router = new Router()
router.prefix('/api')
router.use(jwtMiddleware)
 
router.get('/test', (ctx, next) => {
  
    ctx.result = {
        token: ctx.jwtData
    };
    
    return next()
})
 
module.exports = router
