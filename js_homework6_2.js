// TEST DATA SECTION
// Empty company object
const fakeCompany = {
    name: "Fake company without clients"
};

// Company with deeper hierarchy
const hyperCompany = {
    name: 'Hyper company',
    type: 'Main company',
    nesting_level: 0,
    clients: [
        {
            name: 'Client 1',
            type: 'subCompany',
            nesting_level: 1,
            partners: [
                {
                    name: 'Client 1.1',
                    type: 'subSubCompany',
                    nesting_level: 2,
                    partners: [
                        {
                            name: 'Client 1.1.1',
                            type: 'subSubSubCompany',
                            nesting_level: 3,
                            partners: [
                                {
                                    name: 'Client 1.1.1.1',
                                    type: 'subSubSubSubCompany',
                                    nesting_level: 4,
                                    partners: [
                                        {
                                            name: 'Client 1.1.1.1.1',
                                            type: 'subSuSubSubSubCompany',
                                            nesting_level: 5,

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
// Company object from HW example
const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

// CODE SECTION
function findValueByKey(sourceObject, targetName) {
    let targetObject;
    if (('clients' in sourceObject) && (sourceObject.clients.length >= 1)) {
        let clientsArray = sourceObject.clients;
        // Execute recursive search for each client
        for (let i = 0; i < clientsArray.length; i++) {
            recursiveSearchInObject(clientsArray[i]);
        }
        // Return result section
        if (typeof targetObject == 'undefined') {
            return 'Target company doesn\'t exist';
        } else {
            return targetObject;
        }
    } else {
        return 'Your company doesn\'t have clients yet';
    }
    //sub-funtcion with recursive search in child objects
    function recursiveSearchInObject(obj) {
        for (let param in obj) {
            if (param == 'name' && obj[param] == targetName) {
                targetObject = obj;
            } else if (param == 'partners' && Array.isArray(obj[param])) {
                obj[param].forEach((element) => {
                    recursiveSearchInObject(element);
                });
            }
        }
    }
}

// EXECUTION SECTION

// 1) Request to empty company without clients
// let result = findValueByKey(fakeCompany, 'Roga i kopyta');
// 2) Request to the company with deeper hierarchy
// let result = findValueByKey(hyperCompany,'Client 1.1.1.1.1');
// 3) Request to the company from HW example
let result = findValueByKey(company, 'Клієнт 1.2.3');
// 4) Request to the company from HW example with not existing company name
// let result = findValueByKey(company, 'Клієнт 1.2.9');

console.log('Target company information:\n', result);