const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App Spies', () => {
  let db = {
    saveUser: expect.createSpy(),
  };
  app.__set__('db', db);

  it('should call spy function', () => {
    let spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it('should call saveUser function', () => {
    let email = 'ekansh@example.com';
    let password = '123abc';
    app.handleSignup(email, password);

    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
