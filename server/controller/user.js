const User = require('../models/user')
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
}

module.exports = new UserController