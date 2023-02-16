// Global Object

// console.log(global);

global.setTimeout(() => { // Can use without global.
    console.log('In the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => { // control + C to cancel out node process
    console.log('In the interval');
}, 1000);

console.log(__dirname); // Path of current directory
console.log(__filename); // PAth of directory with file name