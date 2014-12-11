class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ZeroPoint extends Point {
  constructor() {
    super(0, 0);
  }
}

console.log(new ZeroPoint().x);
console.log(new ZeroPoint().y);
