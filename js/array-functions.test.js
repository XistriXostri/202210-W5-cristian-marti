import {
    arrayLength,
    arrayPush,
    arrayPop,
    arrayShift,
    arrayUnshift,
    arraySome,
    arrayEvery,
    arrayFind,
    arrayFilter,
    arrayFindIndex,
    arrayJoin,
} from './array-functions';

// arrayLength
describe('Given arrayLength function', () => {
    const givenAndExpectedCases = [
        { givenArray: ['a', 'b', 'c', 'd'], expected: 4 },
        { givenArray: ['a', 'b', 'c'], expected: 3 },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.givenArray} should be ${it.expected}`, () => {
            expect(arrayLength(it.givenArray)).toBe(it.expected);
        });
    });
});

// arrayPush
describe('Given arrayPush function', () => {
    const givenAndExpectedCases = [
        { givenArray: [1, 2], givenElementToAdd: 3, expected: [1, 2, 3] },
        {
            givenArray: ['a', 'b', 'c'],
            givenElementToAdd: 'd',
            expected: ['a', 'b', 'c', 'd'],
        },
        {
            givenArray: [1, 2, 3, 4],
            givenElementToAdd: 'a',
            expected: [1, 2, 3, 4, 'a'],
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of push ${it.givenElementToAdd} on ${it.givenArray} should be ${it.expected}`, () => {
            expect(
                arrayPush(it.givenArray, it.givenElementToAdd)
            ).toStrictEqual(it.expected);
        });
    });
});

// arrayPop
describe('Given arrayPop function', () => {
    const givenAndExpectedCases = [
        { givenArray: ['a', 'b', 'c', 'd'], expected: ['a', 'b', 'c'] },
        { givenArray: [], expected: undefined },
        { givenArray: ['1'], expected: [] },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of pop ${it.givenArray} should be ${it.expected}`, () => {
            expect(arrayPop(it.givenArray)).toStrictEqual(it.expected);
        });
    });
});

// arrayShift
describe('Given arrayShift function', () => {
    const givenAndExpectedCases = [
        { givenArray: ['a', 'b', 'c', 'd'], expected: ['b', 'c', 'd'] },
        { givenArray: [], expected: undefined },
        { givenArray: ['1'], expected: [] },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of shift ${it.givenArray} should be ${it.expected}`, () => {
            expect(arrayShift(it.givenArray)).toStrictEqual(it.expected);
        });
    });
});

//arrayUnshift
describe('Given arrayUnshift function', () => {
    const givenAndExpectedCases = [
        { givenArray: [1, 2], givenElementToAdd: 3, expected: [3, 1, 2] },
        {
            givenArray: ['a', 'b', 'c'],
            givenElementToAdd: 'd',
            expected: ['d', 'a', 'b', 'c'],
        },
        {
            givenArray: [1, 2, 3, 4],
            givenElementToAdd: 'a',
            expected: ['a', 1, 2, 3, 4],
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of unshift ${it.givenElementToAdd} on ${it.givenArray} should be ${it.expected}`, () => {
            expect(
                arrayUnshift(it.givenArray, it.givenElementToAdd)
            ).toStrictEqual(it.expected);
        });
    });
});

// arraySome
describe('Given arraySome function', () => {
    const givenAndExpectedCases = [
        { givenArray: [1, 2, 'a'], givenElementToAdd: 'a', expected: true },
        {
            givenArray: [],
            givenElementToAdd: 'a',
            expected: false,
        },
        {
            givenArray: [1, 2, 3],
            givenElementToAdd: 'a',
            expected: false,
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of use some of ${it.givenElementToAdd} on ${it.givenArray} should be ${it.expected}`, () => {
            expect(
                arraySome(it.givenArray, it.givenElementToAdd)
            ).toStrictEqual(it.expected);
        });
    });
});

// arrayEvery
describe('Given arrayEvery function', () => {
    const givenAndExpectedCases = [
        { givenArray: ['a', 'a', 'a'], givenElementToAdd: 'a', expected: true },
        {
            givenArray: [],
            givenElementToAdd: 'a',
            expected: false,
        },
        {
            givenArray: [1, 2, 'a'],
            givenElementToAdd: 'a',
            expected: false,
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of use every of ${it.givenElementToAdd} on ${it.givenArray} should be ${it.expected}`, () => {
            expect(
                arrayEvery(it.givenArray, it.givenElementToAdd)
            ).toStrictEqual(it.expected);
        });
    });
});

// arrayFind
describe('Given arrayFind function', () => {
    const givenAndExpectedCases = [
        { givenArray: [1, 2, 'a'], givenElementToAdd: 'a', expected: 'a' },
        {
            givenArray: [],
            givenElementToAdd: 'a',
            expected: undefined,
        },
        {
            givenArray: [1, 2, 3],
            givenElementToAdd: 'a',
            expected: undefined,
        },
        {
            givenArray: ['a', 'b', 'c'],
            givenElementToAdd: 'a',
            expected: 'a',
        },
        {
            givenArray: ['a', 'b', 'c'],
            givenElementToAdd: 'd',
            expected: undefined,
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of find ${it.givenElementToAdd} on ${it.givenArray} should be ${it.expected}`, () => {
            expect(
                arrayFind(it.givenArray, it.givenElementToAdd)
            ).toStrictEqual(it.expected);
        });
    });
});

// arrayFilter
describe('Given arrayFilter function', () => {
    const givenAndExpectedCases = [
        {
            givenArray: [1, 'a', 2, 'a'],
            givenElementToAdd: 'a',
            expected: ['a', 'a'],
        },
        {
            givenArray: [1, 'a', 2],
            givenElementToAdd: 1,
            expected: [1],
        },
        {
            givenArray: [1, 2, 'a', 'b'],
            givenElementToAdd: 'a',
            expected: ['a'],
        },
        {
            givenArray: [1, 2],
            givenElementToAdd: 'a',
            expected: [],
        },
        {
            givenArray: [null, 'a'],
            givenElementToAdd: null,
            expected: [null],
        },
        {
            givenArray: [undefined, 'a'],
            givenElementToAdd: undefined,
            expected: [undefined],
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of filter ${it.givenElementToAdd} on ${it.givenArray} should be ${it.expected}`, () => {
            expect(
                arrayFilter(it.givenArray, it.givenElementToAdd)
            ).toStrictEqual(it.expected);
        });
    });
});

// arrayFindIndex
describe('Given arrayFindIndex function', () => {
    const givenAndExpectedCases = [
        { givenArray: [1, 'a', 2, 3], givenElementToAdd: 'a', expected: 1 },
        {
            givenArray: [1, 'a', 2],
            givenElementToAdd: 1,
            expected: 0,
        },
        {
            givenArray: [1, 2],
            givenElementToAdd: 'a',
            expected: -1,
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of find ${it.givenElementToAdd} on ${it.givenArray} should be ${it.expected}`, () => {
            expect(
                arrayFindIndex(it.givenArray, it.givenElementToAdd)
            ).toStrictEqual(it.expected);
        });
    });
});

// arrayJoin
describe('Given arrayJoin function', () => {
    const givenAndExpectedCases = [
        {
            givenArray: ['a', 'b', 'c'],
            givenElementToAdd: ', ',
            expected: 'a, b, c',
        },
        {
            givenArray: [1, 2, 3],
            givenElementToAdd: '-',
            expected: '1-2-3',
        },
        {
            givenArray: ['a', 'b'],
            givenElementToAdd: '',
            expected: 'ab',
        },
        {
            givenArray: ['a', null],
            givenElementToAdd: '-',
            expected: 'a-',
        },
        {
            givenArray: [undefined, 'b'],
            givenElementToAdd: '-',
            expected: '-b',
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of join ${it.givenElementToAdd} on ${it.givenArray} should be ${it.expected}`, () => {
            expect(
                arrayJoin(it.givenArray, it.givenElementToAdd)
            ).toStrictEqual(it.expected);
        });
    });
});
