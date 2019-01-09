process.env.port = 3001;
process.env.MONGODB_URI = 'mongodb://localhost:27017/TODOjs-local-test';

let mongoose = require("mongoose");
let Todo = require('../src/models/todo.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();

chai.use(chaiHttp);

describe('Todos', () => {
    beforeEach((done) => { //Before each test we empty the database
        Todo.remove({}, (err) => { 
           done();           
        });        
    });

  describe('GET empty todos', () => {
      it('should GET all the todos', (done) => {
        chai.request(server)
            .get('/todo')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  describe('POST todo', () => {
    const postBody = { description: 'TestMessage'}
    it('should return a todo object', (done) => {
        chai.request(server)
            .post('/todo')
            .send(postBody)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('description').eql(postBody.description);
                res.body.should.have.property('done').eql(false);
                res.body.should.have.property('_id');
            });
            done();
    });
  });

});