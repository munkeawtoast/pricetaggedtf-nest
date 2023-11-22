import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { RavenInterceptor, RavenModule } from 'nest-raven'
import { AppConfigModule } from './modules/app-config/app-config.module'
import { PricingsModule } from './modules/pricings/pricings.module'
import { TF2SchemaModule } from './modules/tf2-schema/tf2-schema.module'

@Module({
  imports: [AppConfigModule, RavenModule, TF2SchemaModule, PricingsModule],
  exports: [TF2SchemaModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useValue: new RavenInterceptor(),
    },
  ],
})
export class AppModule {}
