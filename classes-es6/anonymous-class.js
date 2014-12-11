/* jshint esnext:true */

var Animal = class {
  sayHi() {
    return 'Hi, I am a '+this.type()+'.';
  }

  static getName() {
    return 'Animal';
  }
};

var Dog = class extends Animal {
  type() { return 'dog'; }

  sayHi() {
    return super() + ' WOOF!';
  }

  static getName() {
    return super() + '/Dog';
  }
};

console.log(new Dog().sayHi());
console.log(Dog.getName());

var count = 0;
var Cat = class extends (function(){ count++; return Animal; })() {};

console.log(count);
