import { Module } from '@nestjs/common';
import { GpsdevicesService } from './gpsdevices.service';
import { GpsdevicesController } from './gpsdevices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gpsdevice, GpsdeviceSchema } from './schemas/gpddevice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Gpsdevice.name, schema: GpsdeviceSchema },
    ]),
  ],
  controllers: [GpsdevicesController],
  providers: [GpsdevicesService],
})
export class GpsdevicesModule {}
