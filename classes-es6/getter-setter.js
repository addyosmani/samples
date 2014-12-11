class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  set name(name) {
    var parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

var mazer = new Person('Mazer', 'Rackham');
console.log(mazer.name);
mazer.name = 'Ender Wiggin';
console.log(mazer.firstName);
console.log(mazer.lastName);

var forLoopProperties = [];
for (var key in mazer) {
  forLoopProperties.push(key);
}
assert.ok(forLoopProperties.indexOf('name') >= 0, 'getters/setters are enumerable');
