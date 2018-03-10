const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
      // if (res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}`);
      // }
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
      expect(res).toBe(25).toBeA('number');
      done();
    });
  });

  it('should set first and last name', () => {
    let user = { age: 27, location: 'CDMX' };
    let res = utils.setName(user, 'Daniel Carriola');
    expect(res)
      .toInclude({
        firstName: 'Daniel',
        lastName: 'Carriola'
      })
      .toBeA('object');
  });
});

it('should expect some values', () => {
  // expect(12).toNotBe(12);
  // expect({name: 'Daniel'}).toEqual({name: 'Daniel'}); // For objects and arrays
  // expect([2, 3, 4]).toInclude(3); // and toExclude()
  expect({
    name: 'Daniel',
    age: 27,
    location: 'CDMX'
  }).toInclude({
    age: 27
  });
});

// to run custom script within package.json, use npm run test-watch
