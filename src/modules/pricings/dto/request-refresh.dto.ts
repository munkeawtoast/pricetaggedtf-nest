import { IsEnum } from 'class-validator'
import { PricingsSource } from '../enums/source.enum'

export class RequestRefreshDTO {
  @IsEnum(PricingsSource)
  source: PricingsSource
}
