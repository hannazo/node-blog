const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' }); // { encoding: 'utf8' } converts buffer to readable data
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => { // Kinda like an EventListener but for 'data'
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// Piping
readStream.pipe(writeStream); // Works the same way as code on lines 6-10, only from a readable stream to writable stream