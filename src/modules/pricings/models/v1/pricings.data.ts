import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { PricingsResponseDTO } from '../../dto/pricings.dto'

export class Currencies {
  @ApiProperty()
  keys: number
  @ApiProperty()
  metal: number
}

export class PricingData {
  @ApiProperty()
  sku: string

  @ApiProperty()
  name: string
  @ApiProperty()
  baseName: string
  @ApiPropertyOptional()
  source?: string
  @ApiPropertyOptional()
  time?: number
  @ApiProperty()
  buy: Currencies
  @ApiProperty()
  sell: Currencies
}

export const examplePricingData: PricingData[] = [
  {
    sku: '3;11',
    name: 'Strange Kukri',
    source: 'bptf',
    time: 1658167451,
    buy: {
      keys: 0,
      metal: 6.22,
    },
    sell: {
      keys: 0,
      metal: 9.33,
    },
    baseName: 'Kukri',
  },
  {
    sku: '3;6',
    name: 'Kukri',
    source: 'bptf',
    time: 1658523085,
    buy: {
      keys: 0,
      metal: 0.44,
    },
    sell: {
      keys: 0,
      metal: 0.77,
    },
    baseName: 'Kukri',
  },
  {
    sku: '4;11',
    name: 'Strange Knife',
    source: 'bptf',
    baseName: 'Knife',
    time: 1658312988,
    buy: {
      keys: 0,
      metal: 19.11,
    },
    sell: {
      keys: 0,
      metal: 19.88,
    },
  },
  {
    sku: '7;11',
    name: 'Strange Wrench',
    baseName: 'Wrench',
    source: 'bptf',
    time: 1658192341,
    buy: {
      keys: 1,
      metal: 6.88,
    },
    sell: {
      keys: 1,
      metal: 7,
    },
  },
  {
    sku: '9;11',
    name: 'Strange Shotgun',
    source: 'bptf',
    time: 1658566381,
    buy: {
      keys: 0,
      metal: 57.77,
    },
    sell: {
      keys: 1,
      metal: 3.33,
    },
    baseName: 'Shotgun',
  },
  {
    sku: '9;6',
    name: 'Shotgun',
    source: 'bptf',
    time: 1658189416,
    buy: {
      keys: 0,
      metal: 1.11,
    },
    sell: {
      keys: 0,
      metal: 1.33,
    },
    baseName: 'Shotgun',
  },
]

export const examplePricingsResponse: PricingsResponseDTO = {
  pricings: examplePricingData,
  success: true,
  timestamp: 1699254545783,
}
