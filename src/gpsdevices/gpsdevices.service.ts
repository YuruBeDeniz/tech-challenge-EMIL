import { Injectable } from '@nestjs/common';
import { CreateGpsdeviceDto } from './dto/create-gpsdevice.dto';

//@Injectable() attaches metadata,
//which declares that GpsdevicesService is a class

@Injectable()
export class GpsdevicesService {
  create(createGpsdeviceDto: CreateGpsdeviceDto) {
    console.log(createGpsdeviceDto);
    return createGpsdeviceDto;
  }
}
