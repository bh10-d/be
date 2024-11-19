const express = require('express');
const app = express();
PORT=3000;

app.get('/', function(req, res) {
    res.send('Hello, World!');
})

app.get('/api/v1', function(req, res) {
    res.send('Hello, API v1');
})

app.get('/api/v2', function(req, res) {
    res.send('Hello, API v2');
})

app.get('/api/v3', function(req, res) {
    res.send('Hello, API v3');
})

app.get('/api/v4', function(req, res) {
    res.send('Hello, API v4');
})

app.listen(PORT);