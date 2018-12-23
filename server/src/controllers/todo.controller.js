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
        res.status(200).send(todo);
    });
};