import { Injectable } from '@nestjs/common';
import { CreateGpsdeviceDto } from './dto/create-gpsdevice.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Gpsdevice, GpsdeviceDocument } from './schemas/gpddevice.schema';

@Injectable()
export class GpsdevicesService {
  constructor(
    @InjectModel(Gpsdevice.name)
    private GpsdeviceModel: Model<GpsdeviceDocument>,
  ) {}

  async create(createGpsdeviceDto: CreateGpsdeviceDto): Promise<Gpsdevice> {
    //console.log(createGpsdeviceDto);
    const createdGpsdevice = new this.GpsdeviceModel(createGpsdeviceDto);
    console.log(createdGpsdevice);
    return createdGpsdevice.save();
  }
  async findAll(): Promise<Gpsdevice[]> {
    return this.GpsdeviceModel.find().exec();
  }
}
