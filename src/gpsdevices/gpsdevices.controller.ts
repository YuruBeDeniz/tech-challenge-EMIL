import { Controller, Post, Body } from '@nestjs/common';
import { GpsdevicesService } from './gpsdevices.service';
import { CreateGpsdeviceDto } from './dto/create-gpsdevice.dto';
import { Request } from 'express';

@Controller('/')
export class GpsdevicesController {
  static getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly gpsdevicesService: GpsdevicesService) {}

  @Post('gpsdevices')
  create(@Body() createGpsdeviceDto: CreateGpsdeviceDto) {
    return this.gpsdevicesService.create(createGpsdeviceDto);
  }
}
