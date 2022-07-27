import { RunningbacksEntity } from './runningbacks.models';
import {
  State,
  runningbacksAdapter,
  initialState,
} from './runningbacks.reducer';
import * as RunningbacksSelectors from './runningbacks.selectors';

describe('Runningbacks Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRunningbacksId = (it) => it['id'];
  const createRunningbacksEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as RunningbacksEntity);

  let state;

  beforeEach(() => {
    state = {
      runningbacks: runningbacksAdapter.setAll(
        [
          createRunningbacksEntity('PRODUCT-AAA'),
          createRunningbacksEntity('PRODUCT-BBB'),
          createRunningbacksEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Runningbacks Selectors', () => {
    it('getAllRunningbacks() should return the list of Runningbacks', () => {
      const results = RunningbacksSelectors.getAllRunningbacks(state);
      const selId = getRunningbacksId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = RunningbacksSelectors.getSelected(state);
      const selId = getRunningbacksId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getRunningbacksLoaded() should return the current 'loaded' status", () => {
      const result = RunningbacksSelectors.getRunningbacksLoaded(state);

      expect(result).toBe(true);
    });

    it("getRunningbacksError() should return the current 'error' state", () => {
      const result = RunningbacksSelectors.getRunningbacksError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
