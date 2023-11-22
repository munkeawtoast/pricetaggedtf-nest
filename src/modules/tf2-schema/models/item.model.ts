import { Item } from '@tf2autobot/tf2-schema'

export class ItemModel implements Item {
  defindex: number
  quality: number
  craftable?: boolean
  tradable?: boolean
  killstreak?: number
  australium?: boolean
  effect?: number
  festive?: boolean
  paintkit?: number
  wear?: number
  quality2?: number
  target?: number
  craftnumber?: number
  crateseries?: number
  output?: number
  outputQuality?: number
  paint?: number
}
