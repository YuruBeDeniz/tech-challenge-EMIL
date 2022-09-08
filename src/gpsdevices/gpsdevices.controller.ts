import { Controller, Post, Body, Get } from '@nestjs/common';
import { GpsdevicesService } from './gpsdevices.service';
import { CreateGpsdeviceDto } from './dto/create-gpsdevice.dto';
import { Request } from 'express';

@Controller('/')
export class GpsdevicesController {
  constructor(private readonly gpsdevicesService: GpsdevicesService) {}

  @Post('gpsdevices')
  create(@Body() createGpsdeviceDto: CreateGpsdeviceDto) {
    return this.gpsdevicesService.create(createGpsdeviceDto);
  }
}
