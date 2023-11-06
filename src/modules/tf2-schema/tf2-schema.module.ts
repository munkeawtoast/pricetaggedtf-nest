import { Module } from '@nestjs/common'
import { TF2SchemaService } from './tf2-schema.service'

@Module({
  providers: [TF2SchemaService],
  exports: [TF2SchemaService],
})
export class TF2SchemaModule {}
