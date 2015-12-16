import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
chai.use(require("sinon-chai"));

import {Foo} from "../foo";

describe("foo", function() {

  let Meteor;
  beforeEach(function() {
    Meteor = {
      methods: sinon.spy(),
      call: sinon.spy()
    };
  });

  it("returns woo", function() {
    let foo = new Foo(Meteor);
    let bar = foo.bar();
    expect(bar).to.equal("woo!");
  });

  it("does something", function() {
    let foo = new Foo(Meteor);
    foo.doSomething();
    expect(Meteor.call).to.have.been.calledWith("something", "woo!");
  });

});
