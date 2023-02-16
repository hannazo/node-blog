const people = ['Yoshi', 'Ryu', 'Chun-li', 'Mario'];
const ages = [20, 25, 30, 35];

console.log(people);

// module.exports = people; // Export one value

// module.exports = {
//    people: people, // Use for different names, ex people: names;
//    ages: ages
// };

module.exports = {
    people, ages
};