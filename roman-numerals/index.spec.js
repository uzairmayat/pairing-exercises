const chai = require('chai');
const sinon = require('sinon');
const converter = require('./index.js');

const { expect } = chai;

chai.use(require('sinon-chai'));

describe('Roman Numerals', () => {
  it('smoke test', () => {
    expect(true).to.be.true;
  });
});
