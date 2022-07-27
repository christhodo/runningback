import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RunningbacksService } from './runningbacks.service';
import { Runningback } from '@runningback-angular/api-interfaces';

@Controller('runningbacks')
export class RunningbacksController {
  constructor(private readonly runningbacksService: RunningbacksService) {}

  @Post()
  create(@Body() runningback: Runningback) {
    return this.runningbacksService.create(runningback);
  }

  @Get()
  findAll() {
    return this.runningbacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runningbacksService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() runningback: Runningback) {
    return this.runningbacksService.update(id, runningback);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runningbacksService.remove(id);
  }
}
