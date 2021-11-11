// ES5

function Person({name, age}) {
    this.name = name
    this.age = age
    this.tellInfo = () => console.log(`${name} is ${age} years old`) // wouldnt work without the function expression -- () => 
}

// Add attributes and properties after the function constructor has been closed
Person.prototype.sayAge = () => {console.log(this)} // this is the outer scopes's this (window object)
Person.prototype.sayAge2 = function() {console.log(this.age)} // this is the object we invoked the method on


// ES6

class PersonEs6 { // Person(es5)
    constructor(name, age) { // what is in the constructor should be available to every object 
        this.name = name
        this.age = age
        document.getElementById("arrow-test").addEventListener("click", this.sayName)
    }
    // Instance methods (drop the keyword function)
    // sayName() { //es5
    //     console.log(this.name) // 'this' will point to what the event has been attached to, the button!
    // } 
    
    sayName = () => {
        console.log(this.name) //to make sure 'this' points to the object, use an arrow function!
    }
}


// const matteo = new Persona({name: "matteo", age: 29})
const matteoEs6 = new PersonEs6({name: "Matteo", age: 29})


// *******  THERE ARE NO CALLESES IN JS ITS, ITS SYNTACTIC SUGAR FOR FUNCTION NOTATION, meant to look like a class for backend coders to feel more comfortable
