import { getCounter } from './../getCounter/getCounter';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
// we expect getCounter to return from all complex state only the part that is important for counter

import { DeepPartial } from '@reduxjs/toolkit';

describe('getCounter.test.ts', () => {
    test('Should return counter state', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });

});