import { Test, TestingModule } from '@nestjs/testing';
import { GpsdevicesService } from './gpsdevices.service';

describe('GpsdevicesService', () => {
  let service: GpsdevicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpsdevicesService],
    }).compile();

    service = module.get<GpsdevicesService>(GpsdevicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
