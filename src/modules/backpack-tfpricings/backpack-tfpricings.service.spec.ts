import { Test, TestingModule } from '@nestjs/testing'
import { BackpackTFPricingsService } from './backpack-tfpricings.service'

describe('BackpackTFService', () => {
  let service: BackpackTFPricingsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackpackTFPricingsService],
    }).compile()

    service = module.get<BackpackTFPricingsService>(BackpackTFPricingsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return return pricingsmodel', async () => {
    const pricings = await service.findAll()
    expect(pricings).toBeDefined()
  })

  it('should should refresh price when refresh is true', async () => {
    const { timestamp: firstIterationTimestamp } = await service.findAll()

    const { timestamp: secondIterationTimestamp } = await service.findAll()

    expect(firstIterationTimestamp).not.toEqual(secondIterationTimestamp)
  })
})
