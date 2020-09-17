const User = require('../models/user')
const JWT = require('jsonwebtoken')
const { secret } = require('../utils/config')

class UserController {
  async register(ctx) {
    const { user_name = '', user_pwd = '', awatar_url = '', gender = "", email = '', phone_num = '', role = '', } = ctx.request.body
    ctx.verifyParams({
      user_name: { type: 'string', required: true },
      user_pwd: { type: 'string', required: true },
      phone_num: { type: 'string', required: true },
      role: { type: 'number', required: true }
    })
    const verifyName = await User.findOne({ user_name })
    if (verifyName) { ctx.throw(409, '该用户已存在') }
    const user = await new User(ctx.request.body).save()
    ctx.body = user
  }

  async getAllUser(ctx) {
    const user = await User.find({})
    ctx.body = user
  }

  async deleteUser(ctx) {
    const user = await User.findByIdAndRemove(ctx.params.id)
    user ? ctx.body = user : ctx.throw(404, '用户不存在')
    ctx.status = 204
  }

  async login(ctx) {
    ctx.verifyParams({
      user_name: { type: 'string', required: true },
      user_pwd: { type: 'string', required: true }
    })
    const user = await User.findOne(ctx.request.body)
    if (!user) { ctx.throw(401, '用户名或密码不正确！') }
    const { _id, user_name } = user
    const token = JWT.sign({ _id, user_name }, secret, { expiresIn: '1d' })
    ctx.body = { token }
  }

  async checkOwner(ctx, next) {
    if (ctx.params.id !== ctx.state.user._id) {
      ctx.throw(403, '你无权限进行该操作！')
    }
  }
}

module.exports = new UserController