import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GpsdeviceDocument = Gpsdevice & Document;

@Schema()
export class Gpsdevice {
  @Prop()
  brand?: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop()
  createdAt?: Date;
}

export const GpsdeviceSchema = SchemaFactory.createForClass(Gpsdevice);
