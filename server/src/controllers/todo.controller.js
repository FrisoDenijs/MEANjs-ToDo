const Todo = require('../models/todo.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.todo_create = function (req, res) {
    let todo = new Todo(
        {
            description: req.body.description,
            done: false
        }
    );

    todo.save(function (err, result) {
        if (err) {
            return next(err);
        }
        res.send(200, result);
    })
};

exports.todo_details = function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.send(200, todo);
    })
}