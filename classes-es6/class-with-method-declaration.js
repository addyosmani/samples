class Person {
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

var me = new Person();
me.firstName = 'Brian';
me.lastName = 'Donovan';
console.log(me.getName());
