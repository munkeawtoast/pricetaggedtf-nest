import {
  BadRequestException,
  Controller,
  Get,
  Logger,
  Query,
} from '@nestjs/common'
import { FindAllDTO } from './dto/find-all.dto'
import { PricingsProviderService } from './pricings-provider-interface.service'
import { PricingsSource } from './enums/source.enum'
import { AutobotTFPricingsService } from '../autobot-tfpricings/autobot-tfpricings.service'
import { PricingsResponseDTO } from './dto/pricings.dto'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller('pricings')
export class PricingsController {
  private readonly logger = new Logger(PricingsController.name)
  constructor(
    private readonly autobotTfPricingsService: AutobotTFPricingsService
  ) {}

  private getProvider(
    providerName: PricingsSource
  ): PricingsProviderService | undefined {
    return {
      'autobot.tf': this.autobotTfPricingsService,
    }[providerName]
  }

  @Get()
  @ApiOkResponse({
    description: 'The pricings were successfully retrieved',
    type: PricingsResponseDTO,
  })
  async findAll(@Query() query: FindAllDTO): Promise<PricingsResponseDTO> {
    const { source: providerName, refresh } = query
    const provider = this.getProvider(providerName)

    if (refresh) {
      await provider.refresh()
    }
    if (!provider) {
      throw new BadRequestException(`Source ${providerName} not found`)
    }

    return {
      success: true,
      ...(await provider.findAll()),
    }
  }
}
