import { Module } from '@nestjs/common'
import { TF2SchemaService } from './tf2-schema.service'
import { TF2SchemaController } from './tf2-schema.controller'

@Module({
  providers: [TF2SchemaService],
  controllers: [TF2SchemaController],
  exports: [TF2SchemaService],
})
export class TF2SchemaModule {}
