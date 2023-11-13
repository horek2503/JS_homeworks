"use strict"

function isNaN(argument){
    if ((typeof argument) != 'number') {
        return true;
    }
    else {
        if (argument * 0 == 0) {
            return false;
        }
        else return true;
    }
    };

let a = 'qwerty' / 10;

console.log(a);
console.log(isNaN(a));
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN("qwerty"));


