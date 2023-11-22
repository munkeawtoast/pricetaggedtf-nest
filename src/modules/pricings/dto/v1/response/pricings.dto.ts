import { ApiProperty } from '@nestjs/swagger'
import {
  PricingData,
  examplePricingData,
} from '../../../models/v1/pricings.data'

export class PricingsResponseDTO {
  @ApiProperty()
  success: true

  @ApiProperty({
    type: [PricingData],
    example: examplePricingData,
  })
  pricings: PricingData[]

  @ApiProperty({
    example: 1658167451,
  })
  timestamp: number
}
