import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Currencies } from './pricings.data'

export class GroupedPricingDataPricingEntry {
  @ApiProperty()
  sku: string
  @ApiProperty()
  name: string
  @ApiPropertyOptional()
  source?: string
  @ApiPropertyOptional()
  time?: number
  @ApiProperty()
  buy: Currencies
}

export class GroupedPricingDataPricingGroupedByQuality {
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '0': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '1': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '3': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '5': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '6': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '9': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '11': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '13': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '14': Array<GroupedPricingDataPricingEntry>
  @ApiProperty({
    type: GroupedPricingDataPricingEntry,
    isArray: true,
  })
  '15': Array<GroupedPricingDataPricingEntry>
}

export class GroupedPricingData {
  @ApiProperty({
    description: 'The defindex of the item',
  })
  defindex: number

  @ApiProperty({
    description: 'Base name of the item',
  })
  name: string

  @ApiProperty({
    description: 'Item Image URL',
  })
  image: string

  @ApiProperty({
    description: 'Items grouped by quality index',
    type: GroupedPricingDataPricingGroupedByQuality,
  })
  groups: {
    '0': Array<GroupedPricingDataPricingEntry>
    '1': Array<GroupedPricingDataPricingEntry>
    '3': Array<GroupedPricingDataPricingEntry>
    '5': Array<GroupedPricingDataPricingEntry>
    '6': Array<GroupedPricingDataPricingEntry>
    '9': Array<GroupedPricingDataPricingEntry>
    '11': Array<GroupedPricingDataPricingEntry>
    '13': Array<GroupedPricingDataPricingEntry>
    '14': Array<GroupedPricingDataPricingEntry>
    '15': Array<GroupedPricingDataPricingEntry>
  }
}

export const exampleGroupedPricingData: GroupedPricingData[] = [
  {
    defindex: 264,
    name: 'Frying Pan',
    image:
      'http://media.steampowered.com/apps/440/icons/all_pan.16dc18d950facd227349be67f47ea556df2cc47a.png',
    groups: {
      0: [],
      1: [],
      3: [],
      5: [],
      6: [
        {
          sku: '264;6;kt-2',
          name: 'Specialized Killstreak Frying Pan',
          source: 'bptf',
          time: 1700578856,
          buy: {
            keys: 1,
            metal: 4,
          },
        },
        {
          sku: '264;6;kt-1',
          name: 'Killstreak Frying Pan',
          source: 'bptf',
          time: 1700580086,
          buy: {
            keys: 1,
            metal: 3,
          },
        },
        {
          sku: '264;6;kt-3',
          name: 'Professional Killstreak Frying Pan',
          source: 'bptf',
          time: 1700575226,
          buy: {
            keys: 4,
            metal: 38.22,
          },
        },
        {
          sku: '264;6',
          name: 'The Frying Pan',
          source: 'bptf',
          time: 1700580194,
          buy: {
            keys: 0,
            metal: 1.55,
          },
        },
        ,
      ],
      9: [],
      11: [
        // here
        {
          sku: '264;11;kt-3',
          name: 'Strange Professional Killstreak Frying Pan',
          source: 'bptf',
          time: 1700576407,
          buy: {
            keys: 70,
            metal: 5.44,
          },
        },
        {
          sku: '264;11;kt-1',
          name: 'Strange Killstreak Frying Pan',
          source: 'bptf',
          time: 1700409034,
          buy: {
            keys: 61,
            metal: 12.22,
          },
        },
        {
          sku: '264;11;kt-2',
          name: 'Strange Specialized Killstreak Frying Pan',
          source: 'bptf',
          time: 1700352179,
          buy: {
            keys: 62,
            metal: 41.22,
          },
        },
        {
          sku: '264;11',
          name: 'Strange Frying Pan',
          source: 'bptf',
          time: 1693575076,
          buy: {
            keys: 56,
            metal: 7.22,
          },
        },
      ],
      13: [],
      14: [],
      15: [],
    },
  },
]
