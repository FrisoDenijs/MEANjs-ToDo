const express = require('express');
const bodyParser = require('body-parser');

const todoRoute = require('./routes/todo.route'); // Imports routes for the todo
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/TODOjs';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
const mongoConfig = {
    useNewUrlParser: true,
    useFindAndModify: false
  };
mongoose.connect(mongoDB, mongoConfig);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todo', todoRoute);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});