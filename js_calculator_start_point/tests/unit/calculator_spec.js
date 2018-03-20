var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function () {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  })

  it('should be able to subtract', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to multiply', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('should be able to divide', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to concat multiple number clicks', function () {
    calculator.numberClick(3);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 33);
  })

  it('should be able to chain multiple operators together', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 4);
  })

  it('should be able to clear the running total', function () {
    calculator.previousTotal = 5;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

});
