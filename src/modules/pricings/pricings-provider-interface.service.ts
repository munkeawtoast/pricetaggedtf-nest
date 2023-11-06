import { PricingsServiceModel } from './models/v1/pricings.model'

export interface PricingsProviderService {
  findAll(): Promise<PricingsServiceModel>
  refresh(): Promise<void>
}
