import { add } from './sample.js';

describe('Given add function', () => {
    test('should first', () => {
        const r = add(2, 5);
        expect(r).toBe(7);
    });
});
