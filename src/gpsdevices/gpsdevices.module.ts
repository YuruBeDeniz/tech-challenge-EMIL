import { Module } from '@nestjs/common';
import { GpsdevicesService } from './gpsdevices.service';
import { GpsdevicesController } from './gpsdevices.controller';

@Module({
  controllers: [GpsdevicesController],
  providers: [GpsdevicesService],
  exports: [GpsdevicesService],
})
export class GpsdevicesModule {}
