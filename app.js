const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log('Magic happens on port', port);
});

