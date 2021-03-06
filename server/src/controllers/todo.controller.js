const Todo = require('../models/todo.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Todo controller!');
};

exports.todo_create = function (req, res) {
    let todo = new Todo(
        {
            description: req.body.description,
            done: false
        }
    );

    todo.save(function (err, todo) {
        if (err) {
            return next(err);
        }
        res.status(200).send(todo);
    })
};

exports.todo_details = function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.status(200).send(todo);
    })
}

exports.todo_update = function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, todo) {
        if (err) return next(err);
        // res.send(todo) doesn't return updated entity, 
        // so only returning statuscode 202 to show its been accepted, but still processing
        // see: https://restfulapi.net/http-status-202-accepted/
        res.status(202).send();
    });
};

exports.todo_delete = function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.status(202).send();
    })
};

exports.todo_list = function (req, res) {
    Todo.find(function (err, todos){
        if (err) return next(err);
        res.status(200).send(todos);
    })
}