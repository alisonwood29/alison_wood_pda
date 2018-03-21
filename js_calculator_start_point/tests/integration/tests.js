var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have a working clear button', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#clear')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0');
  })

  it('should have a working add button', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })
  //
  // it('should have a working add button', function () {
  //   running_total = element(by.css('#running_total'));
  //   element(by.css('#number1')).click();
  //   element(by.css('#clear')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('0');
  // })

  it('should display infinity when dividing by 0', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
  })



});
