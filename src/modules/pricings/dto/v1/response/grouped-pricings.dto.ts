import { ApiProperty } from '@nestjs/swagger'
import {
  GroupedPricingData,
  exampleGroupedPricingData,
} from '../../../models/v1/grouped-pricings.data'

export class GroupedPricingsResponseDTO {
  @ApiProperty()
  success: true

  @ApiProperty({
    type: [GroupedPricingData],
    example: exampleGroupedPricingData,
  })
  pricings: GroupedPricingData[]

  @ApiProperty({
    example: 1658167451,
  })
  timestamp: number
}
