Main features of an object oriented language:
  - everything is based on objects so we have a class based object oriented language meaning we define classes, classes inherit from other classes and classes instantiate objects.

  - polymorphism => different objects respond to the same interface. For example - you can call each on arrays, you can call each on strings, you can call each on hashes. It doesnt matter who the object is they all respond to the same interface. 

  - abstraction => 

  - encapsulation => objects have method/properties. Within the object we encapsulate data and behavior, data variables, behavior methods and its all packaged inside the object.

  - inheritance => 

Features released in ES6:
  - destructing
  - spread/ rest operator
  - arrow function
  - class syntax
  - block scoped variables (let/const)
  - map & set
  - enhanced object literals
  - string templates => back ticks
  - for of 
  - symbols
  - promise returned from fetch, response returned from .then 
  - etc.



//ES5

function add(a, b) {
    return a + b
}

//ES6(arrow function)

const add2 = (a, b) => a + b // basic example of arrow function 
const add3 = (a, b) => {return a + b} // curly brackets take awaya implicit return hence return having to be stated
const add4 = (a, b) => (  // using round brackets allows for multy line implicit return 
    a + b
)

console.log(add(2, 3))  // returns 5
console.log(add2(2, 3)) // returns 5
console.log(add3(2, 3)) // returns 5
console.log(add4(2, 3)) // returns 5