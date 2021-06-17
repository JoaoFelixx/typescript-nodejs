import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (request: Request, response: Response): Promise<void> {
    await User.find()
      .then((users: Array<string>) => {
        return response.status(200).json(users)
      })
      .catch((err: Array<string>) => {
        console.log(err)
        return response.status(400).json({
          error: true,
          message: 'Error, try again later, bad request'
        })
      })
  }

  public async create (request: Request, response: Response): Promise<void> {
    await User.create(request.body)
      .then(() => {
        return response.status(201).json({
          error: false,
          message: 'Created user successful'
        })
      })
      .catch((err: Array<string>) => {
        console.log(err)
        response.status(400).json({
          error: true,
          message: 'Error, try again later, bad request'
        })
      })
  }
}

export default new UserController()
