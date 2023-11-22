import { Test, TestingModule } from '@nestjs/testing'
import { PricingsController } from './pricings.controller'
import { AutobotTFPricingsModule } from './providers/autobot-tfpricings/autobot-tfpricings.module'
import { ConfigModule } from '@nestjs/config'
import { PricingsSource } from './dto/enums'

describe('PricingsController', () => {
  let controller: PricingsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        AutobotTFPricingsModule,
      ],
      providers: [AutobotTFPricingsModule],
      controllers: [PricingsController],
    }).compile()

    controller = module.get<PricingsController>(PricingsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return all pricings from autobot', async () => {
    await expect(
      controller.findAll({ source: PricingsSource.AUTOBOTTF })
    ).resolves.toBeDefined()
  })
})
