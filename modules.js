const xyz = require('./people'); // Automaticly runs people.js file
// const { people } = require('./people'); // Imports only people property
//       { people, ages } // For both properties

// console.log(xyz); // Returns empty object without module.exports in people.js file
// console.log(people); // Returns "people is not defined"

console.log(xyz);

console.log(xyz.people, xyz.ages); // If used { people} on line 2, xyz. is not needed. Ages is not defined
//         (people, ages); // If line 3 was used

const os = require('os'); // Operating System, built into node

// console.log(os);

// console.log(os.platform(), os.homedir());