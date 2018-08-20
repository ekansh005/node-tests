const db = require('./db');

module.exports.handleSignup = (email, password) => {
  // check email and password combination
  db.saveUser({email, password});
  // send welcome email
};
