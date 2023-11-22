import { Controller, Get, Logger, Query } from '@nestjs/common'
import { TF2SchemaService } from './tf2-schema.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { GetNameDTO } from './dto/v1/request/get-name.dto'
import { GetImageDTO } from './dto/v1/request/get-image.dto'

export interface ITF2SchemaController {
  getName(query: GetNameDTO): Promise<string>
  getImage(query: GetImageDTO): Promise<string>
}

@ApiTags('Schema')
@Controller('schema')
export class TF2SchemaController implements ITF2SchemaController {
  private readonly logger = new Logger(TF2SchemaController.name)
  constructor(private readonly service: TF2SchemaService) {}

  @Get('/name')
  @ApiOkResponse({
    description: 'get name of item by sku',
    type: String,
  })
  async getName(@Query() query: GetNameDTO) {
    const { base, ...item } = query
    const getter = base ? this.service.getBaseName : this.service.getName
    return getter(item)
  }

  @Get('/image')
  @ApiOkResponse({
    description: 'get image of item by sku',
    type: String,
  })
  async getImage(@Query() query: GetImageDTO) {
    const { ...item } = query
    return this.service.getImage(item)
  }
}
