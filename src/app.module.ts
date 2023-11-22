import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PricingsModule } from './modules/pricings/pricings.module'
import * as Joi from 'joi'
import { RavenInterceptor, RavenModule } from 'nest-raven'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TF2SchemaModule } from './modules/tf2-schema/tf2-schema.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().default(3000),
        // DATABASE_URL: Joi.string().uri().required(), DATABASE_AUTH_TOKEN: Joi.string().required(),
        BACKPACK_TF_API_KEY: Joi.string().required(),
        BACKPACK_TF_BASE_URL: Joi.string()
          .uri()
          .default('https://backpack.tf/api/'),
        USER_AGENT: Joi.string().default(
          'https://pricetagged-tf.munkeawtoast.com'
        ),
        STEAM_WEB_API_KEY: Joi.string().required(),
      }),
    }),
    RavenModule,
    TF2SchemaModule,
    PricingsModule,
  ],
  exports: [TF2SchemaModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useValue: new RavenInterceptor(),
    },
  ],
})
export class AppModule {}
