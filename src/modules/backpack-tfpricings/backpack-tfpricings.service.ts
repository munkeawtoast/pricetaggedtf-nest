import {
  Injectable,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common'
import {
  BackpacktfV4PricesResponse,
  BackpacktfV4PricesSuccessResponse,
} from './types'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { PricingData } from 'src/modules/pricings/models/v1/pricings.data'
import { PricingsProviderService } from '../pricings/pricings-provider-interface.service'
import { PricingsServiceModel } from '../pricings/models/v1/pricings.model'

@Injectable()
export class BackpackTFPricingsService implements PricingsProviderService {
  constructor(private readonly httpService: HttpService) {}

  private itemsToPrices() // backpackTfItems: BackpacktfV4PricesSuccessResponse['response']['items'],
  // metadata: {
  //   fetchTime: number
  // }
  : PricingData[] {
    throw new NotImplementedException()
    // return Object.entries(backpackTfItems).flatMap(([baseName, item]) => {
    //   return Object.entries(item.prices).flatMap(([quality, tradablilityDict]) => {
    //     type Craftablility = keyof BackpacktfV4CraftableDict
    //     const craftablilityDict = Object.entries(tradablilityDict.Tradable) as [Craftablility, BackpacktfV4PriceindexDict][]
    //     return craftablilityDict.flatMap(([craftablility, priceIndexDict]) => {
    //       if (Array.isArray(priceIndexDict)) {
    //         const theItem = priceIndexDict[0]
    //         const returningItem: PricingData = {
    //           sku: TF2SKU.fromObject({
    //             defindex: item.defindex[0],
    //             quality: Number(quality),
    //             craftable: craftablility === 'Craftable',
    //             australium: theItem.australium ?? false,
    //           }),
    //           time: metadata.fetchTime,
    //           baseName,
    //           buy: {
    //           }
    //         // }
    //       }
    //       //  else {
    //       //   return Object.entries(priceIndexDict).flatMap(([priceIndex, priceEntry]) => {
    //       //     // const returningItem: PricingsData = {
    //       //     // }
    //       //   })
    //     })
    //   })
    // }) as PricingData[]
  }

  private async findAllRawInternal(): Promise<{
    items: BackpacktfV4PricesSuccessResponse['response']['items']
  }> {
    const {
      data: { response },
    } = await firstValueFrom(
      this.httpService.get<BackpacktfV4PricesResponse>('/IGetPrices/v4')
    )
    if (!response.success) {
      throw new InternalServerErrorException(
        `Fetching Backpack.tf Error: ${response.message}`
      )
    }
    return response
  }

  async findAll(): Promise<PricingsServiceModel> {
    throw new NotImplementedException()
    return {
      pricings: [],
      timestamp: 0,
    }
    // try {
    //   const { items: rawItems } = await this.findAllRawInternal()
    //   return this.itemsToPrices(rawItems, { fetchTime: })
    // } catch (error) {
    //   throw new Error(`Fetching Backpack.tf Error: ${error.message}`)
    // }
  }

  async refresh(): Promise<void> {
    throw new NotImplementedException()
  }
}
