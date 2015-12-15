const expect = require("chai").expect;
import {Foo} from "../foo";

const Meteor = {};

describe("foo", function() {
  it("returns woo", function() {
    let foo = new Foo(Meteor);
    let bar = foo.bar();

    expect(bar).to.equal("woo!");
  });
});
