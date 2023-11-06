import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { AutobotTFPricingsService } from './autobot-tfpricings.service'
import { AutobotTFPricingsHttpConfigService } from './autobot-tfpricings-http-config.service'
import { PricingsCacheConfigService } from '../pricings/pricings-cache-config.service'
import { CacheModule } from '@nestjs/cache-manager'
import { TF2SchemaModule } from '../tf2-schema/tf2-schema.module'

export const autobotTfPricingsModuleToken = 'AutobotTFPricingsModule'
@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: AutobotTFPricingsHttpConfigService,
    }),
    CacheModule.registerAsync({
      useClass: PricingsCacheConfigService,
    }),
    TF2SchemaModule,
  ],
  providers: [AutobotTFPricingsService],
  exports: [AutobotTFPricingsService],
})
export class AutobotTFPricingsModule {}
