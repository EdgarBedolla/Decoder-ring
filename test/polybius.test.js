// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  it("should encode 'thinkful' to '4432423352125413'", () => {
    expect(polybius("thinkful")).to.equal("4432423352125413");
  });

  it("should encode 'Hello world' to '3251131343 2543241341'", () => {
    expect(polybius("Hello world")).to.equal('3251131343 2543241341');
  });

  it("should decode '3251131343 2543241341' to 'hello world'", () => {
    expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
  });

  it("should decode '4432423352125413' to 'th(i/j)nkful'", () => {
    expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
  });

  it("should return false for '44324233521254134'", () => {
    expect(polybius("44324233521254134", false)).to.be.false;
  });
});
