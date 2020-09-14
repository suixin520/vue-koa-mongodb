class UserController {
  async getAllUser(ctx) {
    ctx.body = {
      name: '123',
      pwd: '123'
    }
  }
}

module.exports = new UserController