//Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];

people.shift(); // It removes the first element

people.splice(2, 1, "Jason"); // It changes the last element

people.push("Matteo"); // It add element ad the end of the array

console.log(people.indexOf("Mary")); // It gives the index of Mary

let people_copy = people.slice(1, 3) // It removes the first and last element

console.log(people.indexOf("Foo")); // It gives -1 because it does not exist

let last = people[3]; // It equals a variable to a specific element

for (let i = 0; i < people.length; i++) { //To iterate on the array
    console.log(people[i])
}

for (let i = 0; i < people.length; i++) { //To iterate on the array
    if (people[i] == "Devon") {
        break;
    }
    console.log(people[1])
}


//Exercise 2 : Your favorite colors


const colors = ["Black", "Red", "Green", "Blue", "Orange"]

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`)
}


const suffixes = ["st", "nd", "rd", "th"]

for (let i = 0; i < colors.length; i++) {
    if (i === 0) {
        console.log(`My ${i + 1}${suffixes[0]} choice is ${colors[i]}`)
    }
    else if (i == 1) {
        console.log(`My ${i + 1}${suffixes[1]} choice is ${colors[i]}`)
    }
    else if (i == 2) {
        console.log(`My ${i + 1}${suffixes[2]} choice is ${colors[i]}`)
    }
    else if (i == 3) {
        console.log(`My ${i + 1}${suffixes[3]} choice is ${colors[i]}`)
    }
    else if (i == 4) {
        console.log(`My ${i + 1}${suffixes[3]} choice is ${colors[i]}`)
    }
}


//Exercise 3 : Repeat the question

let question;

do {
    question = Number(prompt("Please enter a number:"));

} while (question < 10);

console.log(`You entered ${question}, which is 10 or greater. Good job!`);


//Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor)
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0])
if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200
}
console.log(building.numberOfRoomsAndRent.dan[1])


//Exercise 5 : Family

const family = {
    last_name: "Balducci",
    members: 3
}

for (let key in family) {
    console.log(key)
}

for (let value in family) {
    console.log(family[value])
}


//Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}


sentence = ''

for (let x in details) {
    sentence = sentence + ((x) + ' ' + (details[x]) + ' ')
}

console.log(sentence)


//Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort()
console.log(names[0][0] + names[1][0] + names[2][0] + names[3][0] + names[4][0] + names[5][0])