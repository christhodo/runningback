import { Test, TestingModule } from '@nestjs/testing';
import { RunningbacksController } from './runningbacks.controller';
import { RunningbacksService } from './runningbacks.service';

describe('RunningbacksController', () => {
  let controller: RunningbacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RunningbacksController],
      providers: [RunningbacksService],
    }).compile();

    controller = module.get<RunningbacksController>(RunningbacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
