/* jshint esnext:true */

class Joiner {
  constructor(string) {
    this.string = string;
  }

  join(...items) {
    return items.join(this.string);
  }

  static join(string, ...items) {
    var joiner = new this(string);
    return joiner.join.apply(joiner, items);
  }
}

class ArrayLike {
  constructor(...items) {
    items.forEach(function(item, i) {
      this[i] = item;
    }.bind(this));
    this.length = items.length;
  }
}

var joiner = new Joiner(' & ');
console.log(joiner.join(4, 5, 6));
console.log(new ArrayLike('a', 'b')[1]);
