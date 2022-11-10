// función length
export function arrayLength(array) {
    let i = 0;
    while (
        array[i] !== undefined ||
        (array[i] === undefined && array[i + 1] !== undefined)
    ) {
        i++;
    }
    return i;
}

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

//función join
export function arrayJoin(array, element) {
    let outputString = '';
    for (let i = 0; i < arrayLength(array); i++) {
        let elementToPush = '';
        if (array[i] !== null || array[i] !== undefined) {
            elementToPush = array[i].toString();
        }
        if (i < arrayLength(array) - 1) {
            elementToPush = elementToPush + element;
        }
        outputString = outputString + elementToPush;
    }
    return outputString;
}

const arrayCaseFindIndex = [
    [[1, 2], ', ', 1],
    [[1, null, 2], ', ', 0],
    [[1, undefined], '-', -1],
    [[1, undefined, 3], '-'],
];

for (let i = 0; i < arrayCaseFindIndex.length; i++) {
    let arr = arrayCaseFindIndex[i][0];
    let elem = arrayCaseFindIndex[i][1];
    console.log('Array inicial: ' + arr + ' + ' + elem);
    const arrf = arr.join(elem);
    console.log('Resultado esperado: ' + arrf);
    const arrp = arrayJoin(arr, elem);
    console.log('Resultado: ' + arrp);
    console.log('------------------------------');
}
