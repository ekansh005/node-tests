const utils = require('./utils');

it('should add two numbers', () => {
  let result = utils.add(33, 11);
  if (result !== 44) {
    throw new Error(`Expected 44 but got ${result}`);
  }
});

it('should square two numbers', () => {
  if (utils.square(3) !== 9) {
    throw new Error(`Expected 9 but got ${utils.square(3)}`);
  }
});
