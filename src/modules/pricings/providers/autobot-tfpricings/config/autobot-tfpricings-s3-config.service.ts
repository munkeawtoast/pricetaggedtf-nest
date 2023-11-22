import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { S3ModuleOptions, S3ModuleOptionsFactory } from 'nestjs-s3'

@Injectable()
export class AutobotTFPricingsS3ConfigService
  implements S3ModuleOptionsFactory
{
  constructor(private readonly configService: ConfigService) {}
  createS3ModuleOptions(): S3ModuleOptions | Promise<S3ModuleOptions> {
    return {
      config: {
        
      },
    }
  }
}
