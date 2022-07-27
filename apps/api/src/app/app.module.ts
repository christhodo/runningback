import { Module } from '@nestjs/common';
import { RunningbacksModule } from '../runningbacks/runningbacks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RunningbacksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
