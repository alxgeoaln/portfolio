const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const email = require('./routes/email');
app.use('/email', email);

app.listen(port, function () {
    console.log('Magic happens on port', port);
});

