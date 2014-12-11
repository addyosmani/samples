class Tripler {
  static triple(n=1) {
    return n * 3;
  }

  static toString() {
    return '3' + super() + '3';
  }
}

class MegaTripler extends Tripler {
  static triple(n=1) {
    return super(n) * super(n);
  }
}

var tripler = new Tripler();

console.log(Tripler.triple());
console.log(Tripler.triple(2));
console.log(tripler.triple);

console.log(Tripler.toString(), '3' + Object.toString.call(Tripler) + '3');

var mega = new MegaTripler();

console.log(MegaTripler.triple(2));
console.log(mega.triple);

console.log(MegaTripler.toString(), '3' + Object.toString.call(MegaTripler) + '3');
