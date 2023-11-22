import { ConfigModule } from '@nestjs/config'
import Joi from 'joi'

export const AppConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
    PORT: Joi.number().default(3000),
    BACKPACK_TF_API_KEY: Joi.string().required(),
    BACKPACK_TF_BASE_URL: Joi.string()
      .uri()
      .default('https://backpack.tf/api/'),
    USER_AGENT: Joi.string().default('https://pricetagged-tf.munkeawtoast.com'),
    STEAM_WEB_API_KEY: Joi.string().required(),
  }),
})
