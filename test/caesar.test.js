// Write your tests here!
const { expect } = require("chai");
const {caesar} = require("../src/caesar")

// Test cases for caesar function
describe('caesar()', () => {
  it('should encode "thinkful" with a shift of 3', () => {
    const result = caesar('thinkful', 3);
    expect(result).to.equal('wklqnixo');
  });

  it('should decode "thinkful" with a shift of -3', () => {
    const result = caesar('thinkful', -3);
    expect(result).to.equal('qefkhcri');
  });

  it('should decode "wklqnixo" with a shift of 3', () => {
    const result = caesar('wklqnixo', 3, false);
    expect(result).to.equal('thinkful');
  });

  it('should encode "This is a secret message!" with a shift of 8', () => {
    const result = caesar('This is a secret message!', 8);
    expect(result).to.equal('bpqa qa i amkzmb umaaiom!');
  });

  it('should decode "BPQA qa I amkzmb umaaiom!" with a shift of -8', () => {
    const result = caesar('BPQA qa I amkzmb umaaiom!', 8, false);
    expect(result).to.equal('this is a secret message!');
  });

  it('should return false for invalid shift values', () => {
    expect(caesar('thinkful')).to.be.false;
    expect(caesar('thinkful', 99)).to.be.false;
    expect(caesar('thinkful', -26)).to.be.false;
  });
});
