import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Logger,
  Query,
} from '@nestjs/common'
import { IPricingsProviderService } from './interfaces/pricings-provider.service.interface'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { PricingsSource } from './dto/enums'
import { FindAllRequestDTO } from './dto/v1/request/find-all.dto'
import { RefreshRequestDTO } from './dto/v1/request/refresh.dto'
import { PricingsResponseDTO } from './dto/v1/response/pricings.dto'
import { GroupedPricingsResponseDTO } from './dto/v1/response/grouped-pricings.dto'
import { PricingsService } from './pricings.service'
import { AUTOBOT_TF_PRICINGS_SERVICE } from './providers/autobot-tfpricings/autobot-tfpricings.module'

export interface IPricingsController {
  findAll(query: FindAllRequestDTO): Promise<PricingsResponseDTO>
  findAllGrouped(query: FindAllRequestDTO): Promise<GroupedPricingsResponseDTO>
  refresh(query: RefreshRequestDTO): Promise<void>
}

@ApiTags('Pricings')
@Controller('pricings')
export class PricingsController implements IPricingsController {
  private readonly logger = new Logger(PricingsController.name)
  constructor(
    @Inject(AUTOBOT_TF_PRICINGS_SERVICE)
    private readonly autobotTfPricingsService: IPricingsProviderService,
    private readonly pricingsService: PricingsService
  ) {}

  private getProvider(
    providerName: PricingsSource
  ): IPricingsProviderService | undefined {
    return {
      'autobot.tf': this.autobotTfPricingsService,
      // FIXME: add backpacktf once done
    }[providerName]
  }

  @Get()
  @ApiOkResponse({
    description: 'get pricings',
    type: PricingsResponseDTO,
  })
  async findAll(@Query() query: FindAllRequestDTO) {
    const { source: providerName, refresh } = query
    const provider = this.getProvider(providerName)

    if (!provider) {
      throw new BadRequestException(`Source ${providerName} not found`)
    }

    if (refresh) {
      await provider.refresh()
    }

    const { pricings } = await provider.findAll()
    return {
      pricings,
      success: true,
      timestamp: Date.now(),
    } satisfies PricingsResponseDTO
  }

  @Get('/group')
  @ApiOkResponse({
    description: 'get pricings grouped by defindex',
    type: GroupedPricingsResponseDTO,
  })
  async findAllGrouped(@Query() query: FindAllRequestDTO) {
    const { source: providerName, refresh } = query
    const provider = this.getProvider(providerName)

    if (!provider) {
      throw new BadRequestException(`Source ${providerName} not found`)
    }

    if (refresh) {
      await provider.refresh()
    }

    const { pricings } = await provider.findAll()

    const groupedData = await this.pricingsService.group(pricings)
    return {
      pricings: groupedData,
      success: true,
      timestamp: Date.now(),
    } satisfies GroupedPricingsResponseDTO
  }
}
