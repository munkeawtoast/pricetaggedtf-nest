import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { AutobotTFPricingsService } from './autobot-tfpricings.service'
import { AutobotTFPricingsHttpConfigService } from './config/autobot-tfpricings-http-config.service'
import { PricingsCacheConfigService } from '../../config/pricings-cache-config.service'
import { CacheModule } from '@nestjs/cache-manager'
import { TF2SchemaModule } from '../../../tf2-schema/tf2-schema.module'

export const AUTOBOT_TF_PRICINGS_SERVICE =
  'AUTOBOT_TF_PRICINGS_SERVICE' as const

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
  providers: [
    {
      provide: AUTOBOT_TF_PRICINGS_SERVICE,
      useClass: AutobotTFPricingsService,
    },
  ],
  exports: [
    {
      provide: AUTOBOT_TF_PRICINGS_SERVICE,
      useClass: AutobotTFPricingsService,
    },
  ],
})
export class AutobotTFPricingsModule {}
