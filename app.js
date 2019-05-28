const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hey There!');
});

app.get('/about', (req, res) => {
    res.send('Hey! Its me, Karan Patel');
});

app.get('/contact', (req, res) => {
    res.send('You can call me anytime you want.');
});

app.listen(4000, () => console.log('Port 2000'));
