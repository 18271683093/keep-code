import { createApp } from './app'



export default context => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp();
        // 设置服务端路由位置
        router.push(context.url);

        // 等待 router 将可能的一部组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            // 匹配失败
            if (!matchedComponents) {
               return reject({ code: 404 })
            }
            resolve(app)
        },reject)
    })
}