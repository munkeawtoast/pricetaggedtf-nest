import { PricingData } from '../models/v1/pricings.data'

export interface IPricingsProviderService {
  findAll(): Promise<{
    pricings: Array<PricingData>
  }>
  refresh(): Promise<void>
}
