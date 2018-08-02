const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const views = require('./views');
const path = require('path');


const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + "./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', async function(req, res) {
    const layout = await views.layout('');
    res.send(layout)
});


module.exports = app;