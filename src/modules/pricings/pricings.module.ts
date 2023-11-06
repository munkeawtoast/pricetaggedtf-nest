import { Module } from '@nestjs/common'
import { PricingsController } from './pricings.controller'
import { AutobotTFPricingsModule } from '../autobot-tfpricings/autobot-tfpricings.module'
import { ThrottlerModule } from '@nestjs/throttler'

@Module({
  controllers: [PricingsController],
  imports: [
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
})
export class PricingsModule {}
