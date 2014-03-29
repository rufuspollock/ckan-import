var fs = require('fs')
  , path = require('path')
  , supertest = require('supertest')
  , assert = require('assert')
  ;

var app = require('../app.js').app;

describe('API', function() {
  it('Upload', function(done) {
    supertest(app)
      .get('/api/1/import')
      .query({
        target: 'http://localhost:5000/dataset/bond-yields-uk',
        source: 'https://github.com/datasets/bond-yields-uk-10y'
      })
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        assert.equal(res.statusCode, 200);
        assert(res, { status: 'ok' });
        done();
      });
  });
});

