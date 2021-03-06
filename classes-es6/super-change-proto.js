var log = '';

class Base {
  p() { log += '[Base]'; }
}

class OtherBase {
  p() { log += '[OtherBase]'; }
}
class Derived extends Base {
  p() {
    log += '[Derived]';
    super();
    Derived.prototype.__proto__ = OtherBase.prototype;
    super();
  }
}

new Derived().p();
console.log(log, '[Derived][Base][OtherBase]');
