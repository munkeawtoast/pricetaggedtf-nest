import { Module } from '@nestjs/common'
import { ThrottlerModule } from '@nestjs/throttler'
import { TF2SchemaModule } from '../tf2-schema/tf2-schema.module'
import { PricingsController } from './pricings.controller'
import { PricingsService } from './pricings.service'
import { AutobotTFPricingsModule } from './providers/autobot-tfpricings/autobot-tfpricings.module'

@Module({
  imports: [
    TF2SchemaModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 3000,
        limit: 1,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    AutobotTFPricingsModule,
  ],
  controllers: [PricingsController],
  providers: [PricingsService],
})
export class PricingsModule {}
