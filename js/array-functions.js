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
    if (arrayLength(array) < 1) return false;
    for (let i = 0; i < arrayLength(array); i++) {
        if (array[i] !== element) return false;
    }
    return true;
}

//función find
export function arrayFind(array, element) {
    if (arraySome(array, element)) return element;
    return undefined;
}

//función filter
export function arrayFilter(array, element) {
    let newArray = [];
    for (let i = 0; i < arrayLength(array); i++) {
        if (array[i] === element) {
            arrayPush(newArray, element);
        }
    }
    return newArray;
}

//función findIndex
export function arrayFindIndex(array, element) {
    for (let i = 0; i < arrayLength(array); i++) {
        if (array[i] === element) return i;
    }
    return -1;
}

//función join
export function arrayJoin(array, element) {
    let outputString = '';
    for (let i = 0; i < arrayLength(array); i++) {
        let elementToPush = '';
        if (array[i] !== null && array[i] !== undefined) {
            elementToPush = array[i].toString();
        }
        if (i < arrayLength(array) - 1) {
            elementToPush = elementToPush + element;
        }
        outputString = outputString + elementToPush;
    }
    return outputString;
}
