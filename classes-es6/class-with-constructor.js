class Multiplier {
  constructor(n=1) {
    this.n = n;
  }

  multiply(n=1) {
    return n * this.n;
  }
}

console.log(new Multiplier().n);
console.log(new Multiplier(6).n);
console.log(new Multiplier().multiply());
console.log(new Multiplier(2).multiply(3));
