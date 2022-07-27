import { PartialType } from '@nestjs/mapped-types';
import { CreateRunningbackDto } from './create-runningback.dto';

export class UpdateRunningbackDto extends PartialType(CreateRunningbackDto) {}
