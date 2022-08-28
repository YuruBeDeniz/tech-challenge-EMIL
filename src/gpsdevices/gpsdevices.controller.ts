import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  HttpCode,
} from '@nestjs/common';
import { GpsdevicesService } from './gpsdevices.service';
import { CreateGpsdeviceDto } from './dto/create-gpsdevice.dto';
import { UpdateGpsdeviceDto } from './dto/update-gpsdevice.dto';
import { Request } from 'express';
import { Gpsdevice } from './interfaces/gpsdevice.interface';

@Controller('gpsdevices')
export class GpsdevicesController {
  static getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly gpsdevicesService: GpsdevicesService) {}

  @Post()
  @HttpCode(204)
  create(@Body() createGpsdeviceDto: CreateGpsdeviceDto) {
    return this.gpsdevicesService.create(createGpsdeviceDto);
    //this handler adds a new GPS device
  }

  //this method tells Nest to create a handler for a specific endpoint for HTTP requests
  //The request object represents the HTTP request and has properties for the request query string, parameters, HTTP headers, and body
  @Get()
  findAll(@Req() request: Request): string {
    return this.gpsdevicesService.findAll();
    //this returns all gpsdevices
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(`This action returns a #${id} gpsdevices`)
    return this.gpsdevicesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGpsdeviceDto: UpdateGpsdeviceDto,
  ) {
    return this.gpsdevicesService.update(+id, updateGpsdeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gpsdevicesService.remove(+id);
  }
}
