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