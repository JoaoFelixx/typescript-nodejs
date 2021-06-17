import { Schema, model } from 'mongoose'

const User = new Schema(
  {
    email: String,
    firstname: String,
    lastname: String
  },
  { timestamps: true }
)

export default model('User', User)
