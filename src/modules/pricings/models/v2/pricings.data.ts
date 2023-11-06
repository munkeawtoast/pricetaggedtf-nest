export type Currencies = {
  keys: number
  metal: number
}

export interface PricingDataV2 {
  sku: string
  name: string
  baseName: string
  source: string
  time: number | null
  buy: Currencies | null
  sell: Currencies | null
}
