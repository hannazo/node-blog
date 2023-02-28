const http = require('http'); // HTTP - Hyper-Text Transfer Protocol
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set header content type
    res.setHeader('Content-Type', 'text/html'); // Set the header for the content that being sent back to the browser

    // res.write('<head><link rel="stylesheet" href="#></head>');
    // res.write('<h1>Hello</h1>'); // Writing whatever content we want to send back to the browser 
    // res.write('<p>How are you?</p>');
    // res.end(); // Ending the response which sends it to the browser

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': // Redirects from about-me to about page
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            // res.statusCode = 200;
            // res.write(data);
            res.end(data); // If using res.write once, can pass data into res.end()
        }
    });
});

server.listen(3000, 'localhost', () => { // Localhost is like a domain name on the web, takes us to specific IP adress called
    // a loopback IP adress 127.0.0.1 and points back directly to your own computer 
    console.log('Listening for requests on port 3000') // Port Number is likea 'doors' into a computer (localhost:3000)
})

// Control + C to cancel server request

// Status Codes
// 100 Range - Informational responses
// 200 Range - Success codes
// 300 Range - Codes for redirects
// 400 Range - User or client error codes
// 500 Range - Server error codes