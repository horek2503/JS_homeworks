"use strict";

// Перший спосіб
function drawTriangle(sideSize, initialSymbol) {
    let stringToDraw = initialSymbol;
    for (let i=0 ; i<sideSize ; i++) {
        console.log(stringToDraw);
        stringToDraw += initialSymbol;
    };
};

// Другий спосіб
function drawTriangleV2(callBackFunction, sideSize, initialSymbol) {
    let stringToDraw = initialSymbol; 
    let counter = 0;
    while (counter < sideSize) {
        callBackFunction(stringToDraw);
        counter++;
        stringToDraw = stringToDraw + initialSymbol;
    };
};

// Малюємо трикутник першим способом
drawTriangle(5,'+');
// Малюємо трикутник другим способом
drawTriangleV2(console.log, 7,'*');