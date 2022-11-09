//función length
// export function arrayLength(array) {
//     let i = 0;
//     while (
//         array[i] !== undefined ||
//         (array[i] === undefined && array[i + 1] !== undefined)
//     ) {
//         i++;
//     }
//     return i;
// }

// //función push
// export function arrayPush(array, element) {
//     array[arrayLength(array)] = element;
//     return array;
// }

// //función filter
// export function arrayFilter(array, element) {
//     let newArray = [];
//     for (let i = 0; i < arrayLength(array); i++) {
//         if (array[i] === element) {
//             arrayPush(newArray, element);
//         }
//     }
//     return newArray;
// }

// const arrayCase = [
//     [[1, 'a', 2, 'a'], 'a', ['a', 'a']],
//     [[1, 'a', 2], 1, [1]],
//     [[1, 2, 'a', 'b'], 'a', ['a']],
//     [[1, 2], 'a', []],
//     [[null, 'a'], null, [null]],
//     [[undefined, 'a'], undefined],
// ];

// for (let i = 0; i < arrayCase.length; i++) {
//     let arr = arrayCase[i][0];
//     let elem = arrayCase[i][1];
//     console.log('Array inicial: ' + arr + ' + ' + elem);
//     const arrf = arr.filter((a) => a === elem);
//     console.log('Resultado esperado: ' + arrf);
//     const arrp = arrayFilter(arr, elem);
//     console.log('Resultado: ' + arrp);
//     console.log('------------------------------');
// }

// const y = [1, 2];
// console.log(y.length);

// const arrayCaseFindIndex = [
//     [[1, 'a', 2, 3], 'a', 1],
//     [[1, 'a', 2], 1, 0],
//     [[1, 2], 'a', -1],
//     [[1, 2, 1, 3], 1],
// ];

// for (let i = 0; i < arrayCaseFindIndex.length; i++) {
//     let arr = arrayCaseFindIndex[i][0];
//     let elem = arrayCaseFindIndex[i][1];
//     console.log('Array inicial: ' + arr + ' + ' + elem);
//     const arrf = arr.findIndex((a) => a === elem);
//     console.log('Resultado esperado: ' + arrf);
//     //const arrp = arrayFindIndex(arr, elem);
//     //console.log('Resultado: ' + arrp);
//     console.log('------------------------------');
// }

const arr = [
    [[1, 2], this[0][0].length],
    [[1, 2, 3], 2],
    [[1, 2, 3, 4], 2],
];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0] + ' es ' + arr[i][1] + ' length');
}

console.log(arr[0][0].length);
