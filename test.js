var expect = require('chai').expect;
var getMax = require('./index.js');

describe('Tests for getting maximum number', function () {
  it('Should get 4 as max value', function () {
    expect(getMax([1, 1, 3, 4])).to.be.eql(4);
  });

  it('Should get -1 as max value in array of negative numbers', function () {
    expect(getMax([-1, -1, -3, -4])).to.be.eql(-1);
  });

  it('Should get 3.9 as max value in array of float numbers', function () {
    expect(getMax([1.1, 2.8, 3.8, 3.9])).to.be.eql(3.9);
  });
});
