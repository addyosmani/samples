class Person {
  static set DB(value) {
    console.log(value, 'mysql');
  }
}

Person.DB = 'mysql';
