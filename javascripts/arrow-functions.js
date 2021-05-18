// Arrow Functions

// quick simple way to define anonymous functions and have:
    // 1. Implicit return for inline notation
    // 2. this is bounded to the surrounding lexical environment
    // 1. Cannot use as constructor
    // 2. Cannot use bind/apply/call (add.call(this, 3, 5) - add.apply(this, [3, 5]))
    // 3. Does not have `arguments` or `yield`
    
function add(a, b) {
    console.log(this)
    return a + b
}

const add2 = (a, b) => {
    console.log(this)
    return a + b
}

const add3 = (a, b) => a + b

const add4 = (a, b) => (
    a + b
)