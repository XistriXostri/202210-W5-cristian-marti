//función length
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

//función push
export function arrayPush(array, element) {
    array[arrayLength(array)] = element;
    return array;
}

//función pop
export function arrayPop(array) {
    let newArray = [];
    if (arrayLength(array) < 1) return undefined;
    for (let i = 0; i < arrayLength(array) - 1; i++) {
        newArray[i] = array[i];
    }
    return newArray;
}

//función shift
export function arrayShift(array) {
    let newArray = [];
    if (arrayLength(array) < 1) return undefined;
    for (let i = 1; i < arrayLength(array); i++) {
        newArray[i - 1] = array[i];
    }
    return newArray;
}

//función unshift
export function arrayUnshift(array, element) {
    let newArray = [];
    if (arrayLength(array) < 1) return undefined;
    newArray[0] = element;
    for (let i = 0; i < arrayLength(array); i++) {
        newArray[i + 1] = array[i];
    }
    return newArray;
}

//función some
export function arraySome(array, element) {
    for (let i = 0; i < arrayLength(array); i++) {
        if (array[i] === element) return true;
    }
    return false;
}

//función every
export function arrayEvery(array, element) {
    let every = false;
    for (let i = 0; i < arrayLength(array); i++) {
        if (array[i] === element) every = true;
        else every = false;
    }
    return every;
}
