import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ItemModel } from 'src/modules/tf2-schema/models/item.model'

export class BaseItemDTO implements ItemModel {
  @ApiProperty()
  defindex: number

  @ApiProperty()
  quality: number

  @ApiPropertyOptional()
  craftable?: boolean

  @ApiPropertyOptional()
  tradable?: boolean

  @ApiPropertyOptional()
  killstreak?: number

  @ApiPropertyOptional()
  australium?: boolean

  @ApiPropertyOptional()
  effect?: number

  @ApiPropertyOptional()
  festive?: boolean

  @ApiPropertyOptional()
  paintkit?: number

  @ApiPropertyOptional()
  wear?: number

  @ApiPropertyOptional()
  quality2?: number

  @ApiPropertyOptional()
  target?: number

  @ApiPropertyOptional()
  craftnumber?: number

  @ApiPropertyOptional()
  crateseries?: number

  @ApiPropertyOptional()
  output?: number

  @ApiPropertyOptional()
  outputQuality?: number

  @ApiPropertyOptional()
  paint?: number
}
