import SchemaManager from '@tf2autobot/tf2-schema'
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ItemModel } from './models/item.model'

@Injectable()
export class TF2SchemaService implements OnModuleInit {
  private logger: Logger
  private schemaManager: SchemaManager
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    this.logger = new Logger(TF2SchemaService.name)
    this.schemaManager = new SchemaManager({
      apiKey: this.configService.getOrThrow('STEAM_WEB_API_KEY'),
      updateTime: 5 * 60 * 1000,
    })
    this.schemaManager.init((err) => {
      this.logger.verbose('init called')
      if (err) {
        throw err
      }
      this.schemaManager.on('ready', () => {
        this.logger.log('SchemaManager ready')
      })
    })
  }

  getName(item: ItemModel) {
    this.logger.verbose('getName called')
    return this.schemaManager.schema.getName(item)
  }

  getBaseName(item: ItemModel) {
    this.logger.verbose('getName called')
    return this.schemaManager.schema.getName({
      defindex: item.defindex,
      quality: 6,
    })
  }

  getImage(item: ItemModel) {
    return this.schemaManager.schema.getItemByDefindex(item.defindex).image_url
  }
}
