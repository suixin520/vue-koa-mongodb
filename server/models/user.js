const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  __v: { type: Number, select: false },
  user_name: { type: String, required: true },
  user_pwd: { type: String, required: true },
  awatar_url: { type: String },
  gender: { type: String, enum: ['male', 'female'], default: 'male', required: true },
  email: { type: String },
  phone_num: { type: String, required: true },
  role: { type: Number, required: true, default: 0 }
},
  {
    timestamps: true
  })

module.exports = model('User', userSchema)