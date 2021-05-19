// Rest, Spread Operator
function sayName(name="Cernan") { // default args are provided with the = operator
    console.log(name)
}

function sayName2(name, ...rest) { // rest operator has to be in the last position
    console.log(name, rest)
}

// sayName()
// sayName2("Matteo", 29, "Hello")


const state = {
    status: "active",
    students: ["Karson", "Graham", "Jessi", "Walter"]
}

const newState = {
    ...state, //keep everything identical to how it was before
    status: "inactive" // only modify/add what I type after the spread operator
}

function f(x, y, z) {
    console.log(x, y, z)
    return x + y + z
}

// console.log(f(4, ...[3, 2]))