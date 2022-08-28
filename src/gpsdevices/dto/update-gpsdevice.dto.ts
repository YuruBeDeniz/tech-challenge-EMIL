import { PartialType } from '@nestjs/mapped-types';
import { CreateGpsdeviceDto } from './create-gpsdevice.dto';

export class UpdateGpsdeviceDto extends PartialType(CreateGpsdeviceDto) {}
