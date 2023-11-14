"use strict";

var carService = {
    'Wash outside': '200 UAH',
    'Wash inside': '150 UAH',
    'Body polishing': '350 UAH',
    'Coffee': '30 UAH',
    price: function () {
        let totalPrice = 0;
        for (let param in this) {
            if (typeof this[param] != 'function') totalPrice += Number.parseInt(this[param]);
        };
        return totalPrice;
    },
    maxPrice: function () {
        let maxPrice;
        let counter = 0;
        for (let param in this) {
            if (counter == 0) maxPrice = Number.parseInt(this[param]);
            if (typeof this[param] != 'function') {
                if (Number.parseInt(this[param]) > maxPrice) maxPrice = Number.parseInt(this[param]);
            };
            counter++;
        };
        return maxPrice;
    },
    minPrice: function () {
        let minPrice;
        let counter = 0;
        for (let param in this) {
            if (counter == 0) minPrice = Number.parseInt(this[param]);
            if (typeof this[param] != 'function') {
                if (Number.parseInt(this[param]) < minPrice) minPrice = Number.parseInt(this[param]);
            };
            counter++;
        };
        return minPrice;
    },
}

// Methods execution for default object
console.log('\nInitial state of prices:\n')
console.log('Total amount of all prices:', carService.price());
console.log('Minimal price:', carService.minPrice());
console.log('Maximal price:', carService.maxPrice());
// Add new price items
carService['Tire pressure check'] = '20 UAH';
carService['Complex A/C cleaning'] = '500 UAH';
// Methods execution after adding new price items
console.log('\nNEW state of prices:\n')
console.log('Total amount of all prices:', carService.price());
console.log('Minimal price:', carService.minPrice());
console.log('Maximal price:', carService.maxPrice());