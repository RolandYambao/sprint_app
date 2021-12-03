const { Redundant } = require('./models');

// Implement CRUD

/************************************************************/
// [C]reate
// Redundant 1
Redundant.create({
    name: 'Void',
    thing: 'Something',
    number: 234,
    purpose: 'Nothing',
})
    .then(function (createdRedundancy) {
        console.log('Redundancy #1, Created', createdRedundancy);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Redundancy', error);
    });

// Redundant 2
Redundant.create({
    name: 'Thing',
    thing: 'Maybe Something',
    number: 642,
    purpose: 'Unknown',
})
    .then(function (createdRedundancy) {
        console.log('Redundancy #2, Created', createdRedundancy);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Redundancy', error);
    });

// Redundant 3
Redundant.create({
    name: 'Another',
    thing: 'Object',
    number: 426,
    purpose: 'Stuff',
})
    .then(function (createdRedundancy) {
        console.log('Redundancy #3, Created', createdRedundancy);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Redundancy', error);
    });

// Redundant 4
Redundant.create({
    name: 'Office',
    thing: 'Sinecure',
    number: 943,
    purpose: 'Bloat',
})
    .then(function (createdRedundancy) {
        console.log('Redundancy #4, Created', createdRedundancy);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Redundancy', error);
    });

// Redundant 5
Redundant.create({
    name: 'Other',
    thing: 'Stuff',
    number: 134,
    purpose: 'Room',
})
    .then(function (createdRedundancy) {
        console.log('Redundancy #5, Created', createdRedundancy);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Redundancy', error);
    });

/************************************************************/
// [R]ead
// findAll Redundancies
Redundant.findAll()
    .then(function (redundantArray) {
        console.log('ALL REDUNDANCIES ARE HERE')
        for (let i = 0; i < redundantArray; i++) {
            console.log(redundantArray[i])
        }
    })
Redundant.findAll()
    .then(function (redundantArray) {
        console.log('ALL BLOAT REDUNDANCIES ARE HERE')
        for (let i = 0; i < redundantArray; i++) {
            if (redundantArray[i].purpose == 'Bloat') {
                console.log(redundantArray[i])
            }
        }
    })