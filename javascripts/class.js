// ES5

function Person({name, age}) {
    this.name = name
    this.age = age
    this.tellInfo = () => console.log(`${name} is ${age} years old`)
}

// Add attributes and properties after the function constructor has been closed
Person.prototype.sayAge = () => {console.log(this)} // this is the outer scopes's this (window object)
Person.prototype.sayAge2 = function() {console.log(this.age)} // this is the object we invoked the method on


// ES6

class PersonEs6 {
    constructor(name, age) {
        this.name = name
        this.age = age
        document.getElementById("arrow-test").addEventListener("click", this.sayName)
    }
    // Instance methods (drop the keyword function)
    sayName() {
        console.log(this.name) // 'this' will point to what the event has been attached to, the button!
    }
    
    sayName2 = () => {
        console.log(this.name) //to make sure 'this' points to the object, use an arrow function!
    }
}


const matteo = new Person({name: "matteo", age: 29})
const matteoEs6 = new PersonEs6({name: "Matteo", age: 29})
