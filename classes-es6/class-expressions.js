/* jshint esnext:true */

var Person = (class Person {});
console.log(typeof Person);

console.log((function(){ return (class Person {}); })().name);
console.log(typeof (class {})');
