import { Runningback } from '@runningback-angular/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RunningbacksService {
  mockRunningbacks: Runningback[] = [
    {
      id: '1',
      title: 'Nest Runningback 01',
      description: 'This is a Nest runningback',
    },
    {
      id: '2',
      title: 'Nest Runningback 02',
      description: 'This is a Nest runningback',
    },
    {
      id: '3',
      title: 'Nest Runningback 03',
      description: 'This is a Nest runningback',
    },
  ];

  findAll() {
    return this.mockRunningbacks;
  }

  findOne(id: string) {
    return this.mockRunningbacks.find((runningback) => runningback.id === id);
  }

  create(runningback: Runningback) {
    this.mockRunningbacks = [
      ...this.mockRunningbacks,
      Object.assign({}, runningback, { id: uuidv4() }),
    ];
    return this.mockRunningbacks;
  }

  update(id: string, runningback: Runningback) {
    this.mockRunningbacks = this.mockRunningbacks.map((w) =>
      w.id === id ? runningback : w
    );
    return this.mockRunningbacks;
  }

  remove(id: string) {
    this.mockRunningbacks = this.mockRunningbacks.filter(
      (runningback) => runningback.id !== id
    );
    return this.mockRunningbacks;
  }
}
