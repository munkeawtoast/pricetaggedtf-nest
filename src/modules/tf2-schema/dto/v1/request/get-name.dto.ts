import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsBooleanString, IsOptional } from 'class-validator'
import { BaseItemDTO } from './item.dto'

export class GetNameDTO extends BaseItemDTO {
  @ApiPropertyOptional({
    description: 'Get base name instead of name',
    type: Boolean,
  })
  @IsOptional()
  @IsBooleanString()
  base: boolean
}
