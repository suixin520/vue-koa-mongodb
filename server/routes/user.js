const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { register, getAllUser } = require('../controller/user')

router.post('/register', register)
router.get('/getAllUser', getAllUser)

module.exports = router