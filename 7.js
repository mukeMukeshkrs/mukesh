// different datatype

var john = ['John', 'Smith',  'designer',1990,  false];

// john.push('blue'); //push adds an element at end
// john.unshift('Mr.'); // unshift adds an element at first
// console.log(john);

// john.pop(); //pop deletes one element at a time at end
// john.pop();
// john.shift(); // shift deletes one element from first
// console.log(john);



console.log(john.indexOf('John'));


//*********************** */

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer ' : 'John is a designer';
console.log(isDesigner);