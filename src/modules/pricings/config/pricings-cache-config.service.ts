import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/cache-manager'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import redisStore from 'cache-manager-redis-store'
import { GlobalEnv } from 'src/modules/app-config/interfaces/global-env.interface'

@Injectable()
export class PricingsCacheConfigService implements CacheOptionsFactory {
  constructor(private configService: ConfigService<GlobalEnv>) {}

  async createCacheOptions(): Promise<CacheModuleOptions<Record<string, any>>> {
    return {
      store: redisStore.create({
        url: this.configService.getOrThrow('REDIS_URL'),
      }),
    }
  }
}
