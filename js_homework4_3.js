"use strict"

function checkProbabilityTheory(count) {
    let currentNumber;
    let numOfOdds = 0;
    let numOfEvens = 0;
    if (count > 0) {
        for (let i = 1; i <= count;) {
            currentNumber = Math.round(Math.random() * 1000);
            if (currentNumber < 100) continue;
            (currentNumber % 2) ? numOfOdds++ : numOfEvens++;
            i++;
        }
        console.log('Всього згенеровано чисел: ', count);
        console.log('Непарних: ', numOfOdds);
        console.log('Парних: ', numOfEvens);
        console.log('% парних / непарних: ', Math.round(numOfEvens / count * 100), '/', Math.round(numOfOdds / count * 100));
    } else {
        console.log('Нема чого генерувати.');
    }
}

checkProbabilityTheory(15);