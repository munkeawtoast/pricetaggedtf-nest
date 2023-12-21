import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import SchemaManager from '@tf2autobot/tf2-schema'
import { GlobalEnv } from '../app-config/interfaces/global-env.interface'
import { ItemModel } from './models/item.model'

@Injectable()
export class TF2SchemaService implements OnModuleInit {
  private readonly logger: Logger
  private readonly schemaManager: SchemaManager
  constructor(private readonly configService: ConfigService<GlobalEnv>) {
    this.logger = new Logger(TF2SchemaService.name)
    this.schemaManager = new SchemaManager({
      apiKey: this.configService.getOrThrow('STEAM_WEB_API_KEY'),
      updateTime: 5 * 60 * 1000,
    })
  }

  async onModuleInit() {
    return new Promise((resolve, reject) => {
      this.schemaManager.init((err) => {
        if (err) {
          reject(err)
          throw err
        }
        resolve(true)
      })
    })
  }

  getName(item: ItemModel) {
    this.logger.verbose('getName called for ' + item)
    return this.schemaManager.schema.getName(item)
  }

  getBaseName(item: ItemModel) {
    this.logger.verbose('getBaseName called for ' + item)
    let name = this.schemaManager.schema.getName({
      defindex: item.defindex,
      quality: 6,
    })

    if (name.startsWith('The ')) {
      name = name.slice(4)
    }

    return name
  }

  getImage(item: ItemModel) {
    return this.schemaManager.schema.getItemByDefindex(item.defindex).image_url
  }
}
