const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
  it('should get hello world response', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({error: 'page not found'});
    })
    .end(done);
  });

  it('should get list of users', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toBeA('array').toInclude({
        name: 'sanjay',
        age: 25,
      });
    })
    .end(done);
  });
});
