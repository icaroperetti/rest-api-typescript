import { Server } from '@overnightjs/core'
import * as database from '@src/database'
// import 'dotenv/config'
import express, { Application } from 'express'
import { BeachesController } from './controllers/beaches'
import { ForecastController } from './controllers/forecast'
import './util/module-alias'
export class SetupServer extends Server {
  constructor(private port = 3000) {
    super()
  }

  public async init(): Promise<void> {
    this.setupExpress()
    this.setupControllers()
    await this.databaseSetup()
  }

  private setupExpress(): void {
    this.app.use(express.json())
  }

  private setupControllers(): void {
    const forecastController = new ForecastController()
    const beachesController = new BeachesController()
    this.addControllers([forecastController, beachesController])
  }

  public getApp(): Application {
    return this.app
  }

  private async databaseSetup(): Promise<void> {
    await database.connect()
  }

  public async close(): Promise<void> {
    await database.close()
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info('Server listening on port: ' + this.port)
    })
  }
}
