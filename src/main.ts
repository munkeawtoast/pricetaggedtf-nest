import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { config as dotEnvConfig } from 'dotenv'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as Sentry from '@sentry/node'

async function bootstrap() {
  dotEnvConfig()
  if (!process.env.SENTRY_DSN) {
    throw new Error('SENTRY_DSN is not set')
  }
  Sentry.init({
    dsn: process.env.SENTRYDSN,
    tracesSampleRate: 1.0,
  })

  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.NODE_ENV === 'production' ? ['error', 'warn'] : undefined,
    cors: {
      origin: 'https://loadout.tf',
    },
  })
  const config = new DocumentBuilder()
    .setTitle('Pricetagged.tf')
    .setDescription('Pricetagged.tf API description')
    .setVersion('1.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
}
bootstrap()
