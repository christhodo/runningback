import { RunningbacksEntity } from './runningbacks.models';
import * as RunningbacksActions from './runningbacks.actions';
import { State, initialState, reducer } from './runningbacks.reducer';

describe('Runningbacks Reducer', () => {
  const createRunningbacksEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as RunningbacksEntity);

  beforeEach(() => {});

  describe('valid Runningbacks actions', () => {
    it('loadRunningbacksSuccess should return set the list of known Runningbacks', () => {
      const runningbacks = [
        createRunningbacksEntity('PRODUCT-AAA'),
        createRunningbacksEntity('PRODUCT-zzz'),
      ];
      const action = RunningbacksActions.loadRunningbacksSuccess({
        runningbacks,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
