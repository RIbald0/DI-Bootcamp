//Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}`)
})

console.log(colors)

violetExist = colors.some((color) => { return color === "Violet" });
if (violetExist === true) {
    console.log("Yeah")
} else {
    console.log("No...")
}

console.log(violetExist)


//Exercise 2 : Colors #2

const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];


colors2.forEach((color, index) => {
    const number = index + 1;
    const suffix = number === 1 ? ordinal[1] :
        number === 2 ? ordinal[2] :
            number === 3 ? ordinal[3] :
                ordinal[0];
    console.log(`${number}${suffix} choice is ${color}`)
})


//Exercise 3 : Analyzing

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//expected output is [bread, carrot, potato, chicken, apple, orange]

const country = "USA";
console.log([...country]);

//expected output is ['U','S','A']

//------Bonus------
let newArray = [...[, ,]];
console.log(newArray)

//expected output is [undefined, undefined]


//Exercise 4 : Employees

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];



const mapUsers = users.map((user) => {
    let greeting = "Hello"
    return `${greeting} ${user.firstName}`
})

console.log(mapUsers)


const fullStackResidents = users.filter((user) => {
    if (user.role === "Full Stack Resident") {
        return true
    }
})
const onlyLastName = fullStackResidents.map((unique) => {
    return unique.lastName
})
console.log(onlyLastName)


//Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let string = epic.reduce((acc, word) => {
    return acc + ' ' + word
})

console.log(string)


//Exercise 6 : Employees #2

const students = [
{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }
];


const passedTest = students.filter((student) => {
    if (student.isPassed === true) {
        return true
    }
})


const congratulations = passedTest.forEach((i) => {
    console.log(`Good job ${i.name}, you passed the course in ${i.course}`)
})


console.log(congratulations)


