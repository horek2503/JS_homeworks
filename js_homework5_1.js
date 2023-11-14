"use strict";

let car1 = {
    vendor: 'Subaru',
    model: 'Forester',
    year: 2008,
    color: 'White',
    owner: {
        name: 'Ihor',
        surname: 'Bocharov',
        city: 'Odesa'
    },
    getInfo: function () {
        for (let key in this) {
            if (typeof this[key] != 'function') console.log(key + ':' , this[key]);
        };
    }
};

// Initial set of parameters
car1.getInfo();
// Adding new parameter
car1.engine = '2.5 diesel';
// Delimeter for console
console.log('\nResult of new parameter add:\n')
// New set of parameters
car1.getInfo();