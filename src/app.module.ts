import { Module } from '@nestjs/common';
import { GpsdevicesModule } from './gpsdevices/gpsdevices.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GpsdevicesModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
  ],
})
export class AppModule {}
