// Arrow Functions
    // PROS
        // implicit returns for inline statements without {} or multiline wrapped in ()
        // concise syntax
        // make writing anonymous functions easy
        // this is bounded to the surrounding scope

    // CONS
        // cannot use constructor()
        // Cannot use bind, apply, call
        // Cannot use yield
        // Cannot use 'arguments'

//ES5
function add(a, b) {
    console.log(arguments)
    console.log(this)
    console.log(a + b)
}

// how to use call or apply:
    // in both cases, the function is invoked right away and 'this' is binded right away as well
    // add.call(this, 3, 5)
    // add.apply(this, [3, 5])    

//ES6
const add2 = (a, b) => {return a + b} //inline statements with {} need the return keyword!!! No implicit return.
const add3 = (a, b) => a + b //inline statements without {} do not need the return keyword.
const add4 = (a, b) => ( 
    a + b // another way to implicitly return something with multiline syntax and () parenthesis
)

// console.log(add(2, 3))
// console.log(add2(2, 3))
// console.log(add3(2, 3))
// console.log(add4(2, 3))

// --------------------------------------------------------------------------------------------------------------

//ES5
function add8(a, b) {
    return a + b
}

//ES6(arrow function)
const add5 = (a, b) => a + b // basic example of arrow function 
const add6 = (a, b) => {return a + b} // curly brackets take awaya implicit return hence return having to be stated
const add7 = (a, b) => (  // using round brackets allows for multy line implicit return 
    a + b
)

console.log(add8(2, 3))  // returns 5
console.log(add5(2, 3)) // returns 5
console.log(add6(2, 3)) // returns 5
console.log(add7(2, 3)) // returns 5