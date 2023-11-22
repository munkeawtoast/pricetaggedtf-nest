export type AutobotTFPricesResponse = {
  success: boolean
  items: Array<AutobotTFItemEntry>
}

export type AutobotTFItemEntry = {
  sku: string
  name: string
  source: string
  time: number
  buy: AutobotTFCurrencies
  sell: AutobotTFCurrencies
}

export type AutobotTFCurrencies = {
  keys: number
  metal: number
}
