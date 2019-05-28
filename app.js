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

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`It is port ${port}`));
