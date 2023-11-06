import { IsBooleanString, IsEnum, IsOptional } from 'class-validator'
import { PricingsSource } from '../enums/source.enum'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class FindAllDTO {
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
