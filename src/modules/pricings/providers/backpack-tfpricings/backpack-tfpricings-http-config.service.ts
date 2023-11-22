import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class BackpackTFPricingsHttpConfigService
  implements HttpModuleOptionsFactory
{
  constructor(private readonly configService: ConfigService) {}
  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: this.configService.getOrThrow('BACKPACK_TF_BASE_URL'),
      headers: {
        'User-Agent': this.configService.getOrThrow('USER_AGENT'),
      },
      params: {
        key: this.configService.getOrThrow('BACKPACK_TF_API_KEY'),
      },
    }
  }
}
