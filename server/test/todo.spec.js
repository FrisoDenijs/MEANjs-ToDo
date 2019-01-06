let mongoose = require("mongoose");
let Todo = require('../src/models/todo.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Todos', () => {
    beforeEach((done) => { //Before each test we empty the database
        Todo.remove({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET empty todos', () => {
      it('it should GET all the books', (done) => {
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

});