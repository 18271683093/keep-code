

const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports =  {
    user:ctx =>{

    },
    login:ctx =>{
        const {userName, password} = ctx.request.body;
        ctx.result = jwt.sign({
            data: user._id,
            // 设置 token 过期时间
            exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
        }, config.secret)

    }

}