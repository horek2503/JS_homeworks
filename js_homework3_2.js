"use strict";

let result = +0;
for (let i=1 ; i<=100 ; i++) {
    if (i % 3 == 0) continue;
    result += i;
};

console.log('Сума чисел від 1 до 100 включно, які не кратні 3 = ' + result);