const express = require('express');
const app = express();
PORT=3000;

app.get('/', function(req, res) {
    res.send('Hello, World!');
})

app.get('/api/v1', function(req, res) {
    res.send('Hello, API v1');
})

app.listen(PORT);