//Exercise 1 : Location

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//Output will be a string saying: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


//Exercise 2: Display Student Info

function displayStudentInfo(objUser) {
    const { first, last } = objUser
    return `Your full name is ${first} ${last}`
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }))


//Exercise 3: User & id

const users = { user1: 18273, user2: 92833, user3: 90315 }

console.log(Object.entries(users))

console.log(Object.entries(users).map(([key, value]) => [key, value * 2]));


//Exercise 4 : Person class

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);


//Output will be object


//Exercise 5 : Dog class

//The 2nd example is correct because it correctly uses the super keyword to call the super class constructor on the name parameter


//Exercise 6 : Challenges

//Part 1

// Output = False
// Output =  False

//Reason is because the equality operator (===) doesn't compare their contents. Instead, it checks if the two variables are pointing to the exact same object in memory.

//Part 2

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number) //Output 4 because the value was changed with object.number = 4;
console.log(object3.number) //Output 4 because it's equal to value of object2
console.log(object4.number) //Output 5 because const variable is created with this value

//Part 3

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound(sound) {
            return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
}


let farmerCow = new Mammal('Tofu', 'cat', 'white and grey')
console.log(farmerCow.sound('Miaow'))





