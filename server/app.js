const path = require('path')
const Koa = require('koa')
const app = new Koa()
const routing = require('./routes')
const static = require('koa-static')
const error = require('koa-json-error')
const body = require('koa-body')
const paramter = require('koa-parameter')
const mongoose = require('mongoose')
const { dbs } = require('./utils/config')
mongoose.connect(dbs, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => err ? console.log(err) : console.log('数据库连接成功！'))

app.use(static(path.join(__dirname, 'public')))
app.use(error({ postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest } }))
app.use(body({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, './public/uploads'),
    keepExtensions: true
  }
}))
app.use(paramter(app))

routing(app)

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
})

module.exports = app