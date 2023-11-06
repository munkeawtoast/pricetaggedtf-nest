export type BackpackTfItemDefIndex = number

export type BackpacktfV4PricesBaseItemDoc = {
  /**
   * An array of known defindexes for this item. Items may have more than one used defindex due to Valve shenanigans.
   */
  defindex?: Array<BackpackTfItemDefIndex>
  /**
   * A dictionary of prices keyed by the quality integer.
   */
  prices?: { [quality: string]: BackpacktfV4TradableDict }
}

export type BackpacktfV4CraftableDict = {
  Craftable?: BackpacktfV4PriceindexDict
  'Non-Craftable'?: BackpacktfV4PriceindexDict
}

export type BackpacktfV4TradableDict = {
  Tradable?: BackpacktfV4CraftableDict
  'Non-Tradable'?: BackpacktfV4CraftableDict
}

export type BackpacktfV4PricesEntry = {
  /**
   * Internal currency name for the price
   */
  currency?: string
  /**
   * Value of the item, in the given currency
   */
  value?: number
  /**
   * Upper bound value for the item. Only set if the item has a price range.
   */
  value_high?: number
  /**
   * Item's value in the lowest currency without rounding. If raw is set to 2, this is the lower value if a high value exists. Otherwise, this is the average between the high and low value. Requires `raw`.
   */
  value_raw?: number
  value_raw_high?: number
  last_update?: number
  difference?: number
  /**
   * If set, item is an australium weapon.
   */
  australium?: boolean
}

export type BackpacktfV4PriceindexDict =
  | Record<string, BackpacktfV4PricesEntry>
  | Array<BackpacktfV4PricesEntry>

export type BackpacktfV4PricesFailedResponse = {
  response: {
    success: 0
    message: string
  }
}
export type BackpacktfV4PricesSuccessResponse = {
  response: {
    success: 1
    message: string
    current_time: number
    raw_usd_value: number
    usd_currency: string
    usd_currency_index: number
    items: {
      [itemName: string]: BackpacktfV4PricesBaseItemDoc
    }
  }
}

export type BackpacktfV4PricesResponse =
  | BackpacktfV4PricesSuccessResponse
  | BackpacktfV4PricesFailedResponse
