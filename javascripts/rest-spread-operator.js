function sayName(name, ...rest) {
    console.log(`Hello ${name}! Here's the extra arguments list: ${rest}`)
}

const state = {
    status: "active",
    students: ["Matteo", "Cernan", "Laura"]
}

const newState = {
    ...state,
    status: "inactive"
}

function f(x, y, z) {
    return x + y + z;
  }
console.log(f(4, ...[2,3]) == 9)