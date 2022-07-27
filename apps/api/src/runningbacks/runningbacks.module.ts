import { Module } from '@nestjs/common';
import { RunningbacksService } from './runningbacks.service';
import { RunningbacksController } from './runningbacks.controller';

@Module({
  controllers: [RunningbacksController],
  providers: [RunningbacksService]
})
export class RunningbacksModule {}
