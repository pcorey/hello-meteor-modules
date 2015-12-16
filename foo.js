export class Foo {

  constructor(Meteor) {
    this.Meteor = Meteor;
  }

  bar() {
    return "woo!";
  }

  doSomething() {
    this.Meteor.call("something", this.bar());
  }

}
