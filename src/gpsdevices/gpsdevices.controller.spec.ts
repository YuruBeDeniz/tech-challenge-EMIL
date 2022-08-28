import { Test, TestingModule } from '@nestjs/testing';
import { GpsdevicesController } from './gpsdevices.controller';
import { GpsdevicesService } from './gpsdevices.service';

describe('GpsdevicesController', () => {
  let controller: GpsdevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GpsdevicesController],
      providers: [GpsdevicesService],
    }).compile();

    controller = module.get<GpsdevicesController>(GpsdevicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
