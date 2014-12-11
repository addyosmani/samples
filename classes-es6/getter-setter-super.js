class Animal {
  get sound() {
    return 'I am a ' + this.type + '.';
  }
}

class Cat extends Animal {
  get type() { return 'cat'; }

  get sound() {
    return super.sound + ' MEOW!';
  }
}

console.log(new Cat().sound);
