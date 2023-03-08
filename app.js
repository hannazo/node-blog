const express = require('express');
const morgan = require('morgan');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs'); // Automaticly looking in "views" folder
// app.set('views', 'myviews'); // To set a different folder to look for views

// Listen for requests
app.listen(3000);

// Middleware & static file
app.use(express.static('public'))

app.use(morgan('dev')); // Replaces middleware code below (kinda?)

// Middleware we created before adding morgan
// app.use((req, res, next) => { 
//     console.log('New request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', { root: __dirname });
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs }); // { blogs: blogs } - because blogs and blogs called the same, can shorten to just blogs
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog' })
})

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 pages
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
}); // Fires for every single response so this should be at the very bottom of the page