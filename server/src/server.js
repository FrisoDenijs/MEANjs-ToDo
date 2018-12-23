const express = require('express');
const bodyParser = require('body-parser');

const todoRoute = require('./routes/todo.route'); // Imports routes for the products
const app = express();
app.use('/todo', todoRoute);

let port = 1234;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})