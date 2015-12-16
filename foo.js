export class Foo {

  constructor(Meteor) {
    this.Meteor = Meteor;
    Meteor.methods({
      "foo": function() {
        return this.bar();
      }
    });
  }

  bar() {
    return "woo!";
  }

  doSomething() {
    this.Meteor.call("something", this.bar());
  }

}
