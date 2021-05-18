// ES6
class Person {
    constructor({name, age}) {
        this.name = name
        this.age = age
        document.getElementById("arrow-test").addEventListener("click", this.alsoCredentials)
    }

    getCredentials() {
        console.log(this)
        console.log(`${this.name} is ${this.age} years old!`)
    }

    alsoCredentials = () => {
        console.log(this)
        console.log(`${this.name} is ${this.age} years old!`)
    }
}

let matteo = new Person({name: "Matteo", age: 29})

// ES5