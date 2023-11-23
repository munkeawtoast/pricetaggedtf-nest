import { Injectable, Logger } from '@nestjs/common'
import Tf2Sku from '@tf2autobot/tf2-sku'
import { TF2SchemaService } from '../tf2-schema/tf2-schema.service'
import {
  GroupedPricingData,
  GroupedPricingDataPricingEntry,
} from './models/v1/grouped-pricings.data'
import { PricingData } from './models/v1/pricings.data'

export interface IPricingsService {
  group(data: Array<PricingData>): Promise<Array<GroupedPricingData>>
}

@Injectable()
export class PricingsService implements IPricingsService {
  private readonly logger = new Logger(PricingsService.name)
  constructor(private readonly tf2SchemaService: TF2SchemaService) {}

  async group(data: PricingData[]): Promise<GroupedPricingData[]> {
    const groupedData = data.reduce<GroupedPricingData[]>(
      (accumulated, item) => {
        function pushNewItem(group: GroupedPricingData, item: PricingData) {
          const { quality } = Tf2Sku.fromString(item.sku)
          group.groups[quality].push({
            buy: item.buy,
            name: item.name,
            sku: item.sku,
            source: item.source,
            time: item.time,
          } satisfies GroupedPricingDataPricingEntry)
        }

        const sku = Tf2Sku.fromString(item.sku)
        let itGroup = accumulated.find((p) => p.defindex === sku.defindex)
        if (!itGroup) {
          itGroup = structuredClone<GroupedPricingData>({
            defindex: sku.defindex,
            name: this.tf2SchemaService.getBaseName(sku),
            image: this.tf2SchemaService.getImage(sku),
            groups: {
              '0': [],
              '1': [],
              '3': [],
              '5': [],
              '6': [],
              '9': [],
              '11': [],
              '13': [],
              '14': [],
              '15': [],
            },
          })
          accumulated.push(itGroup)
        }
        pushNewItem(itGroup, item)

        return accumulated
      },
      []
    )
    return groupedData
  }
}
