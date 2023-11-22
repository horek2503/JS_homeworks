"use strict"

// TEST DATA SECTION
var arr = [
    {
        userName: "Test",
        lastName: "TestSurname",
        email: "test.test@gmail.com" // OK
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com" // OK
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // wrong domain
    },
    {
        userName: "Ferenc",
        lastName: "Subbo",
        email: "ferenc79@yahoo" // no root domain
    },
    {
        userName: "Georgii",
        lastName: "Ovcharenko",
        email: "georgii_gmail.com" // no @
    },
    {
        userName: "Stepan",
        lastName: "Guliay",
        email: "stepan@the_best@yahoo.com" // several @
    },
    {
        userName: "Oleg",
        lastName: "Baidak",
        email: ".oleg@yahoo.com" // starts from .
    },
    {
        userName: "Ivan",
        lastName: "Diachenko",
        email: "ivan_12.02.1970@gmail.com" // wrong format before @ ( too many . according to our criteria)
    },
    {
        userName: "Sergiy",
        lastName: "Diachenko",
        email: "Sergiy_12_02_1970@gmail.com" // also OK
    },
];

// CODE SECTION
let regex = /^\w+\.?\w*@(gmail|yahoo)\.com$/;

var targetArray = arr.filter(filterUsersByEmail);

function filterUsersByEmail(user) {
    return regex.test(user["email"]);
};

// EXECUTION SECTION
console.log('Users with valid emails:\n', targetArray);
