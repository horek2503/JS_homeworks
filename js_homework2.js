"use strict"
// read user's answer
var answer = prompt("Введіть, будь ласка, Ваш вік:");
// convert to number if not empty input
var age = (answer == '' || answer == null) ? NaN : Number(answer);
// create variable for final message
var finalMessage;
// Check if number was entered
if (age || age === 0) {
    // Check if the number is positive or zero
    if (age >= 0) {
        // Check correct ending for finalMessage (by % 10)
        let ageEnding = age % 10;
        // Special case for first ten years in each hundred
        if ((age - ageEnding -10) % 100 === 0) {
            finalMessage = 'Вам ' + age + ' років';
        // All the rest cases
        } else {
            switch (ageEnding) {
                case 1:
                    finalMessage = 'Вам ' + age + ' рік';
                    break;
                case 2:
                case 3:
                case 4:
                    finalMessage = 'Вам ' + age + ' роки';
                    break;
                default:
                    finalMessage = 'Вам ' + age + ' років';
            }
        }
    // Check if number is negative
    } else if (age < 0) {
        finalMessage = 'Ви ввели від\'ємне число. Будь ласка, обовіть сторінку та повторіть ввод.';
    }
// NaN case    
} else {
    finalMessage = 'Ви ввели НЕ число. Будь ласка, обовіть сторінку та повторіть ввод.';
}
alert(finalMessage);
console.log(finalMessage);