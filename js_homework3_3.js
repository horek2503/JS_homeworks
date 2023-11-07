"use strict";

function toPow(baseNum, exponent) {
    let result=+1;
    if (exponent > 0) {
        while (exponent) {
            result *= baseNum;
            exponent--;
        };
    } else if (exponent < 0) {
        while (exponent) {
            result *= baseNum;
            exponent++;
        };
        result = 1 / result;
    };
    return result;
};


console.log('4 ^ 8 = ' + toPow(4,8));
console.log('123 ^ 0 = ' + toPow(123,0));
console.log('2 ^ -3 = ' + toPow(2,-3));

