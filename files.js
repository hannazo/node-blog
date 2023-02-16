const fs = require('fs') // File system

// Reading files
fs.readFile('./docs/blog1.txt', (err, data) => { // Inside callback function we take two things, an error if there was one and data, stuff that we read from the file
    if (err) {
        console.log(err);
    }
    // console.log(data); // Buffer is a package of data that's being sent to us when we read the file
    console.log(data.toString());
});

// Writing files
fs.writeFile('./docs/blog1.txt', 'Hello, world', () => { // Overwrites previous content in the blog1 file
    console.log('File has been written');
});

fs.writeFile('./docs/blog2.txt', 'Hello again', () => { // Creates a new file if it doesn't exist already
    console.log('File has been written');
});

// Directories
// fs.mkdir('./assets', (err) => { // Won't create it twice, gives an error that file already exists
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder created');
// });

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder has been created');
    });
} 
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder has been deleted')
    });
};

// Deleting files
if (fs.existsSync('./docs/deleteme.txt')) { // Doesn't give an error when there is no file
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File has been deleted');
    });
};