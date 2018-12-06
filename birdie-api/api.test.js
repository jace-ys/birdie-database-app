const dotenv = require('dotenv').config({ path: '../.env' });
const connection = require('./libraries/dbConn');
const server = require('./api');
const request = require('supertest');
const expect = require('chai').expect;

before(() => {
  console.log('Mocha tests starting!');
});

after(async () => {
  await connection.end();
  await server.close();
  console.log('Server closed!');
});

describe('Testing API endpoints..', () => {

  describe('Endpoint: /columns', () => {
    it('Returns JSON with column names', () => {
      request(server)
        .get('/api/v1/columns')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.columnNames).to.have.length.above(0);
        });
    });
  });

  describe('Endpoint: /columns/:name', () => {
    it('Should return JSON with data about education', () => {
      request(server)
        .get('/api/v1/columns/education')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('columnData');
          expect(res.body.columnData.title).to.equal('education');
          expect(res.body.columnData.summary).to.have.length.above(0);
        });
    });

    it('Should returns JSON with data about dividends', () => {
      request(server)
        .get('/api/v1/columns/dividends')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('columnData');
          expect(res.body.columnData.title).to.equal('dividends');
          expect(res.body.columnData.summary).to.have.length.above(0);
        });
    });

    it('Should return JSON with data about wage per hour', () => {
      request(server)
        .get('/api/v1/columns/wage_per_hour')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('columnData');
          expect(res.body.columnData.title).to.equal('wage per hour');
          expect(res.body.columnData.summary).to.have.length.above(0);
        });
    });

    it('Should return 404 error on invalid route', () => {
      request(server)
        .get('/api/v1/columns/invalid_route')
        .expect(404)
        .end((err, res) => {
          expect(res.body).to.equal('404 Not Found');
        });
    });
  });
});
