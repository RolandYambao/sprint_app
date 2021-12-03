const express = require('express');

const { redundant } = require('./models');

const app = express();
const PORT = process.env.PORT || 8000;
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs'); // for our view (html like pages), we want to use 
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.json({ message: 'Welcome to the Redundant Database' });
});

app.listen(PORT, function () {
    console.log(`Server running on PORT`, PORT);
});

app.get('/redundant', function (req, res) {
    // get all redundancies
    redundant.findAll()
        .then(function (redundantList) {
            console.log('FOUND ALL REDUNDANCIES', redundantList);
            res.render('redundant', { redundant: redundantList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        })
});

// // Implement CRUD
// /************************************************************/
// // [C]reate
// // Redundant 1
// redundant.create({
//     name: 'Void',
//     thing: 'Something',
//     number: 234,
//     purpose: 'Nothing',
// })
//     .then(function (createdRedundancy) {
//         console.log('Redundancy #1, Created', createdRedundancy);
//     })
//     .catch(function (err) {
//         console.log('ERROR with adding new Redundancy', error);
//     });

// // Redundant 2
// redundant.create({
//     name: 'Thing',
//     thing: 'Maybe Something',
//     number: 642,
//     purpose: 'Unknown',
// })
//     .then(function (createdRedundancy) {
//         console.log('Redundancy #2, Created', createdRedundancy);
//     })
//     .catch(function (err) {
//         console.log('ERROR with adding new Redundancy', error);
//     });

// // Redundant 3
// redundant.create({
//     name: 'Another',
//     thing: 'Object',
//     number: 426,
//     purpose: 'Stuff',
// })
//     .then(function (createdRedundancy) {
//         console.log('Redundancy #3, Created', createdRedundancy);
//     })
//     .catch(function (err) {
//         console.log('ERROR with adding new Redundancy', error);
//     });

// // Redundant 4
// redundant.create({
//     name: 'Office',
//     thing: 'Sinecure',
//     number: 943,
//     purpose: 'Bloat',
// })
//     .then(function (createdRedundancy) {
//         console.log('Redundancy #4, Created', createdRedundancy);
//     })
//     .catch(function (err) {
//         console.log('ERROR with adding new Redundancy', error);
//     });

// // Redundant 5
// redundant.create({
//     name: 'Other',
//     thing: 'Stuff',
//     number: 134,
//     purpose: 'Room',
// })
//     .then(function (createdRedundancy) {
//         console.log('Redundancy #5, Created', createdRedundancy);
//     })
//     .catch(function (err) {
//         console.log('ERROR with adding new Redundancy', error);
//     });

// /************************************************************/
// // [R]ead
// // findAll Redundancies
// redundant.findAll()
//     .then(function (redundantArray) {
//         console.log('ALL REDUNDANCIES ARE HERE')
//         for (let i = 0; i < redundantArray; i++) {
//             console.log(redundantArray[i])
//         }
//     })
// redundant.findAll()
//     .then(function (redundantArray) {
//         console.log('ALL BLOAT REDUNDANCIES ARE HERE')
//         for (let i = 0; i < redundantArray; i++) {
//             if (redundantArray[i].purpose == 'Bloat') {
//                 console.log(redundantArray[i])
//             }
//         }
//     })

// /************************************************************/
// // [U]pdate
// // update Redundancy
// redundant.update({
//     thing: 'Mass'
// }, {
//     where: {
//         name: 'Thing'
//     }
// }).then(function (redundantChanged) {
//     console.log('UPDATED REDUNDANCY', redundantChanged)
// });

// /************************************************************/
// // [D]elete
// // destroy Redundancy
// redundant.destroy({
//     where: {
//         name: 'Thing',
//         thing: 'Mass',
//         number: 642,
//         purpose: 'Unknown',
//     }
// }).then(function (redundantDeleted) {
//     console.log('DELETED REDUNDANCY', redundantDeleted)
// });
