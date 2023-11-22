import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AutobotTFPricingsHttpConfigService
  implements HttpModuleOptionsFactory
{
  constructor(private readonly configService: ConfigService) {}
  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: 'https://autobot.tf/',
      headers: {
        'User-Agent': this.configService.getOrThrow('USER_AGENT'),
      },
    }
  }
}
