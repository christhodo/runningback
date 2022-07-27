import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { RunningbacksEffects } from './runningbacks.effects';
import * as RunningbacksActions from './runningbacks.actions';

describe('RunningbacksEffects', () => {
  let actions: Observable<any>;
  let effects: RunningbacksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        RunningbacksEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(RunningbacksEffects);
  });

  describe('loadRunningbacks$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: RunningbacksActions.loadRunningbacks() });

      const expected = hot('-a-|', {
        a: RunningbacksActions.loadRunningbacksSuccess({ runningbacks: [] }),
      });

      expect(effects.loadRunningbacks$).toBeObservable(expected);
    });
  });
});
