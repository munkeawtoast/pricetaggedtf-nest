import { IsEnum } from 'class-validator'
import { PricingsSource } from '../../enums'

export class RefreshRequestDTO {
  @IsEnum(PricingsSource)
  source: PricingsSource
}
