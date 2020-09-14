const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { getAllUser } = require('../controller/user')

router.get('/', getAllUser)

module.exports = router