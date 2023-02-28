const express = require('express');

// Express app
const app = express();

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 pages
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
}); // Fires for every single response so this should be at the very bottom of the page