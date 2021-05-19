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
