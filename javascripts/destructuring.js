// Destructuring arrays is based on position
let array = ["Karson", "Graham", "Jessi", "Walter"]
let [karson, graham , jessi, walter] = array
let [one, , three, four] = array //graham has not been mapped to a variable

// Destructuring objects is based on the keyword name. The variable name has to match the key name.
let obj = {
    studentsCount: 4, 
    avg: 5.0, 
    teacher: {
        name: "Matteo", 
        age: 29
    }
}
let {studentsCount, avg, teacher} = obj //good one-level destructuring
let {studentsCounts, average, teachers} = obj //bad one-level destructuring, the var names and key names don't match

function formatInfo({studentsCount, avg, teacher: {name, age}}) { //good two-level destructuring
    console.log(`The number of students is ${studentsCount} with avg grade ${avg}. The teacher is ${name} of ${age} yo!`)
}

const configObj = {
    method: "POST",
    body: JSON.stringify({
        studentsCount: studentsCount, //could be refactored, check out next line!
        avg //when a key and a value names match, you can type them one time (old version-> avg: avg)
    })
}