class Foo {
}

console.log(new Foo().constructor, Foo, 'Foo instances should have Foo as constructor');
console.log(new Foo() instanceof Foo, 'Foo instances should be `instanceof` Foo');
