const Router = require('koa-router')
const Vue = require('vue');
const path = require('path')
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(path.resolve(__dirname, '../src/index.template.html'), 'utf-8')
});

const router = new Router();
router.get('/', async (ctx, next) => {
    const vm = new Vue({
        data: {
            url: "/xxxx",
        },
        template: `<div id="app">
           <p>访问的URL是：{{url}}</p>
        </div>`
    });
    const context = {
        title: 'vue服务器渲染组件',
        meta: `
        <meta charset="utf-8">
        <meta name="" content="vue服务器渲染组件">
      `
    };
    try {
        // 传入context 渲染上下文对象
        const html = await renderer.renderToString(vm, context);
        console.log(html)
        ctx.status = 200;
        ctx.body = html;
    } catch (e) {
        console.log(e)
        ctx.status = 500;
        ctx.body = '服务器错误';
    }
})

module.exports = router;