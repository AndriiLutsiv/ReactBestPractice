import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { counterReducer } from 'entities/Counter';
import { counterActions } from './counterSlice';
describe('counterSlice.test.ts', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10
        };

        expect(
            counterReducer(state, counterActions.decrement())
        ).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: CounterSchema = {
            value: 10
        };

        expect(
            counterReducer(state, counterActions.increment)
        ).toEqual(11);
    });

    //default state which is 0 must be incremented;
    test('should equal 1', () => {
        expect(
            counterReducer(undefined, counterActions.increment)
        ).toEqual(1);
    });
});