const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const jwt = require('koa-jwt')
const { secret } = require('../utils/config')
const { register, getAllUser, deleteUser, login, checkOwner } = require('../controller/user')

const auth = jwt({ secret })

router.post('/register', register)
router.get('/getAllUser', getAllUser)
router.delete('/delete/:id', auth, checkOwner, deleteUser)
router.post('/login', login)

module.exports = router