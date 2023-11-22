import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/cache-manager'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import redisStore from 'cache-manager-redis-store'

@Injectable()
export class PricingsCacheConfigService implements CacheOptionsFactory {
  constructor(private configService: ConfigService) {}

  async createCacheOptions(): Promise<CacheModuleOptions<Record<string, any>>> {
    return {
      store: redisStore.create({
        url: this.configService.get<string>('REDIS_URL'),
      }),
    }
  }
}
