"use strict"

function pad(sourceString, symbolToAdd = ' ', toBeginningBool = true, targetLength) {
    let stringToAdd = '';
    let currentLength = sourceString.length;
    if (currentLength >= targetLength) {
        return sourceString;
    } else {
        for (let i = currentLength; i < targetLength; i++) {
            stringToAdd += symbolToAdd;
        }
    }
    if (toBeginningBool == true) return (stringToAdd + sourceString);
    else return (sourceString + stringToAdd);
}

// Дописуємо в кінець рядка
console.log(pad('qwerty', '-', false, 12));
// Дописуємо до початку рядка
console.log(pad('qwerty', '+', true, 9));
// Ліміт символів
console.log(pad('qwerty', '/', true, 5));