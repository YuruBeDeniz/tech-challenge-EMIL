import { Injectable } from '@nestjs/common';
import { CreateGpsdeviceDto } from './dto/create-gpsdevice.dto';
import { UpdateGpsdeviceDto } from './dto/update-gpsdevice.dto';

//@Injectable() attaches metadata,
//which declares that CatsService is a class

@Injectable()
export class GpsdevicesService {
  create(createGpsdeviceDto: CreateGpsdeviceDto) {
    return 'This action adds a new gpsdevice';
  }

  findAll() {
    return `This action returns all gpsdevices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gpsdevice`;
  }

  update(id: number, updateGpsdeviceDto: UpdateGpsdeviceDto) {
    return `This action updates a #${id} gpsdevice`;
  }

  remove(id: number) {
    return `This action removes a #${id} gpsdevice`;
  }
}
