// Write your tests here!
const { expect } = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution()", () => {
  it("should encode 'thinkful' with given alphabet to 'jrufscpw'", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
  });

  it("should encode 'You are an excellent spy' with given alphabet to 'elp xhm xf mbymwwmfj dne'", () => {
    expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.equal("elp xhm xf mbymwwmfj dne");
  });

  it("should decode 'jrufscpw' with given alphabet to 'thinkful'", () => {
    expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal("thinkful");
  });

  it("should encode 'message' with given alphabet to 'y&ii$r&'", () => {
    expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal("y&ii$r&");
  });

  it("should decode 'y&ii$r&' with given alphabet to 'message'", () => {
    expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
  });

  it("should return false for invalid substitution alphabet 'short'", () => {
    expect(substitution("thinkful", "short")).to.be.false;
  });

  it("should return false for invalid substitution alphabet 'abcabcabcabcabcabcabcabcyz'", () => {
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false;
  });
});
