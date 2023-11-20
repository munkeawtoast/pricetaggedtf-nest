import SchemaManager, { Item } from '@tf2autobot/tf2-schema'
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TF2SchemaService implements OnModuleInit {
  private readonly schemaManager: SchemaManager
  private readonly logger = new Logger(TF2SchemaService.name)
  constructor(private readonly configService: ConfigService) {
    this.schemaManager = new SchemaManager({
      apiKey: this.configService.getOrThrow('STEAM_WEB_API_KEY'),
      updateTime: 5 * 60 * 1000,
    })
  }

  async onModuleInit() {
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

  getName(item: Item) {
    this.logger.verbose('getName called')
    return this.schemaManager.schema.getName(item)
  }

  getImage(item: Item) {
    return this.schemaManager.schema.getItemByDefindex(item.defindex).image_url
  }
}
