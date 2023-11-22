import { Test, TestingModule } from '@nestjs/testing'
import { AutobotTFPricingsService } from './autobot-tfpricings.service'
import { HttpModule } from '@nestjs/axios'
import { AutobotTFPricingsHttpConfigService } from './config/autobot-tfpricings-http-config.service'
import { CacheModule } from '@nestjs/cache-manager'
import { PricingsCacheConfigService } from '../../config/pricings-cache-config.service'
import { TF2SchemaModule } from '../../../tf2-schema/tf2-schema.module'

describe('AutobotTFService', () => {
  let service: AutobotTFPricingsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    }).compile()

    service = module.get<AutobotTFPricingsService>(AutobotTFPricingsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
