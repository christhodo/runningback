import { Test, TestingModule } from '@nestjs/testing';
import { RunningbacksService } from './runningbacks.service';

describe('RunningbacksService', () => {
  let service: RunningbacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RunningbacksService],
    }).compile();

    service = module.get<RunningbacksService>(RunningbacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
