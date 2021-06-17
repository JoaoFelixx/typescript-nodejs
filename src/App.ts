import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routers/router'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.Promise = global.Promise
    mongoose
      .connect('mongodb://localhost:27017/tsnode', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(():void => console.log('Connection sucessfull'))
      .catch((err):void => console.warn('Error connection ' + err))
  }

  private routes (): void {
    this.express.use(router)
  }
}
const application = new App().express

export default application
