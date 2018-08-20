const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    let result = utils.add(33, 11);
    expect(result).toBe(44).toBeA('number');
  });

  it('sholud async add two number', (done) => {
    utils.asyncAdd(2, 3, (result) => {
      expect(result).toBe(5).toBeA('number');
      done();
    });
  });

  it('should square two numbers', () => {
    expect(utils.square(3)).toBe(9).toBeA('number');
  });

  it('should set user firstName and lastName', () => {
    expect(utils.setName({location: 'toulouse'}, 'ekansh saxena')).toInclude({
      firstName: 'ekansh',
      lastName: 'saxena',
    });
  });
});
