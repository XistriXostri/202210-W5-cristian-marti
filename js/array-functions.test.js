import {
    arrayLength,
    arrayPush,
    arrayPop,
    arrayShift,
    arrayUnshift,
    arraySome,
} from './array-functions';

//ArrayLength
describe('Given arrayLength function', () => {
    const ArrayCase = [
        [['a', 'b', 'c', 'd'], 4],
        [[], 0],
        [[5], 1],
        [[1, undefined, 2], 3],
        [[null], 1],
        [[NaN], 1],
        [[{}], 1],
        [[{ undefined }], 1],
    ];
    test.each(ArrayCase)(`The result of %p should be %i`, (array, expected) => {
        const result = arrayLength(array);
        expect(result).toBe(expected);
    });
});

// ArrayPush
describe('Given arrayPush function', () => {
    const arrayCase = [
        [[1, 2], 3, [1, 2, 3]],
        [['a', 'b', 'c'], 'd', ['a', 'b', 'c', 'd']],
        [[1, 2, 3, 4], 'a', [1, 2, 3, 4, 'a']],
    ];
    test.each(arrayCase)(
        `The result of %p + %p should be %p`,
        (array, element, expected) => {
            const result = arrayPush(array, element);
            expect(result).toStrictEqual(expected);
        }
    );
});

// ArrayPop
describe('Given arrayPop function', () => {
    const arrayCase = [
        [
            ['a', 'b', 'c', 'd'],
            ['a', 'b', 'c'],
        ],
        [[], undefined],
        [['1'], []],
    ];
    test.each(arrayCase)(`The result of %p should be %p`, (array, expected) => {
        const result = arrayPop(array);
        expect(result).toStrictEqual(expected);
    });
});

// ArrayShift
describe('Given arrayShift function', () => {
    const arrayCase = [
        [
            ['a', 'b', 'c', 'd'],
            ['b', 'c', 'd'],
        ],
        [[], undefined],
        [['1'], []],
    ];
    test.each(arrayCase)(`The result of %p should be %p`, (array, expected) => {
        const result = arrayShift(array);
        expect(result).toStrictEqual(expected);
    });
});

//ArrayUnshift
describe('Given arrayUnshift function', () => {
    const arrayCase = [
        [[1, 2], 3, [3, 1, 2]],
        [['a', 'b', 'c'], 'd', ['d', 'a', 'b', 'c']],
        [[1, 2, 3, 4], 'a', ['a', 1, 2, 3, 4]],
    ];
    test.each(arrayCase)(
        `The result of %p + %p should be %p`,
        (array, element, expected) => {
            const result = arrayUnshift(array, element);
            expect(result).toStrictEqual(expected);
        }
    );
});

// ArraySome
describe('Given arraySome function', () => {
    const arrayCase = [
        [[1, 2, 'a'], 'a', true],
        [[], 'a', false],
        [[1, 2, 3], 'a', false],
    ];

    test.each(arrayCase)(
        `The result of %p + %p should be %p`,
        (array, element, expected) => {
            const result = arraySome(array, element);
            expect(result).toBe(expected);
        }
    );
});
