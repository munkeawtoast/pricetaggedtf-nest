import { IsBooleanString, IsEnum, IsOptional } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { PricingsSource } from '../../enums'

export class FindAllRequestDTO {
  @IsEnum(PricingsSource)
  @ApiProperty({
    enum: PricingsSource,
  })
  source: PricingsSource

  @IsBooleanString()
  @IsOptional()
  @ApiPropertyOptional()
  refresh?: boolean
}
