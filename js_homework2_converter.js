"use strict"
/* Input variables */

var itemToConvert = 'кг';
//var itemToConvert = 'км';
//var itemToConvert = 'год';
var initialQTY = 11;

/* Output variables*/
var finalQTY;
var outputMessage;

switch (itemToConvert) {
    case 'год':
        finalQTY = initialQTY * 60;
        outputMessage = initialQTY + 'год. - це ' + finalQTY + 'хв.';
        break;
    case 'км':
        finalQTY = initialQTY * 1000;
        outputMessage = initialQTY + 'км. - це ' + finalQTY + 'м.';
        break;
    case 'кг':
        finalQTY = initialQTY * 1000;
        outputMessage = initialQTY + 'кг. - це ' + finalQTY + 'г.';
        break;
    default:
        outputMessage = 'Вибачте, величини окрім "кг", "км" та "год" не підтримуються.';
        break;
}

console.log(outputMessage);