"use strict"

let regex = /[^aа]{6,}/gi; // Відкидаємо і латинську, і кириличну 'a' не зважаючи на регістр; Виводимо всі групи


let str = 'A: In a lineA 0 matches';
// let str = 'B: But in a lineB there are matches';
// let str = 'C: А у цьому рядку будемо шукати співпадіння кирилицею';

console.log(str.match(regex));