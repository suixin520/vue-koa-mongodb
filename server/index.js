const Koa = require('koa')
const app = new Koa()
const routing = require('./routes')

// app.use(async (ctx) => {
//   ctx.body = '服务端启动成功！'
// })

routing(app)

app.listen(8088, () => console.log('服务端已在8088端口启动成功！'))