import { ApiProperty } from '@nestjs/swagger'

export class ErrorResponseDTO {
  @ApiProperty()
  success: false

  @ApiProperty()
  message?: string
}
