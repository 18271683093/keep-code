const Router = require('koa-router')
const Vue = require('vue')
const path = require('path')
const { createRenderer, createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync(path.resolve(__dirname, '../src/index.template.html'), 'utf-8');
const serverBundle = require('../src/dist/vue-ssr-server-bundle.json')
const clientManifest = require('../src/dist/vue-ssr-client-manifest.json')

const isDev = false;
// if (isDev) {
//     const renderer = createRenderer({
//         template: template
//     });
// } else {
    const renderer = createBundleRenderer(serverBundle, {
        template: template,
        clientManifest
    });
// }


const router = new Router();
router.get('/', async (ctx, next) => {

    const context = {
        title: 'vue服务器渲染组件',
        meta: `
        <meta charset="utf-8">
        <meta name="" content="vue服务器渲染组件">
      `,
        url: ctx.req.url
    };
    
    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err)
            if (err.code === 404) {
                ctx.result = {
                    msg:'Page not found',
                    code:404
                }
            } else {
                ctx.result = {
                    msg:'Internal Server Error',
                    code:500
                }
            }
        } else {
            ctx.status = 200;
            ctx.res.end(html)
        }
    });
})

module.exports = router;