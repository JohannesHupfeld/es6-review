// Destructuring

const array = ["Matteo", "Cernan", "Laura"]

// const [matteo, cernan , laura] = array
// const [matteo, laura, cernan] = array
// const [matteo, , laura] = array

const person = {
    name: "Matteo",
    age: 29
}

// const {name, age} = person
// const {firstName, age} = person

function credentials(person) {
    console.log(`${person.name} is exactly ${person.age} years old`)
}

function credentials2({name, age}) {
    console.log(`${name} is exactly ${age} years old`)
}

const {firstName, currentSection} = {firstName: "Matteo", currentSection: "JS"}
let configObj = {
    method: "POST", 
    body: JSON.stringify({
        firstName,
        currentSection
    })
}