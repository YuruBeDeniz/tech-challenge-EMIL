import { ApiProperty } from '@nestjs/swagger';

export class CreateGpsdeviceDto {
  @ApiProperty()
  brand?: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  createdAt?: Date;
}
