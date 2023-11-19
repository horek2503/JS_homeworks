"use strict";

function myBlend(arr) {
    if (arr.length >= 2) {
        for (let i = 0; i < arr.length; i++) {
            // randoly define new element index
            var randomIndex = Math.round(Math.random() * (arr.length - 1));
            // swap elements
            let tempItem = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = tempItem;
        };
    } else {
        console.log('Array is too small to mix.');
    }
}

function blendAndShow(arr) {
    console.log('Initial array: ', arr);
    myBlend(arr);
    console.log('Mixed array: ', arr);
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = ['a', 'b', 'c'];
let array3 = [10, 's', null, 109, false, 'hello'];
let array4 = [9];

console.log('\nARRAY1:');
blendAndShow(array1);
console.log('\nARRAY2:');
blendAndShow(array2);
console.log('\nARRAY3:');
blendAndShow(array3);
console.log('\nARRAY4:');
blendAndShow(array4);