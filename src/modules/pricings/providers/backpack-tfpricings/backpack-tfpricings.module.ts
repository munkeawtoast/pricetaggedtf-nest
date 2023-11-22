import { Module } from '@nestjs/common'
import { BackpackTFPricingsService } from './backpack-tfpricings.service'
import { HttpModule } from '@nestjs/axios'
import { BackpackTFPricingsHttpConfigService } from './backpack-tfpricings-http-config.service'

export const backpackTfPricingsModuleToken = 'BackpackTFPricingsModule'
@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: BackpackTFPricingsHttpConfigService,
    }),
  ],
  providers: [BackpackTFPricingsService],
})
export class BackpackTFPricingsModule {}
