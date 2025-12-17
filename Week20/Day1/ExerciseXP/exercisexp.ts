let message = "Hello, World!";
console.log(message)


let age : number = 37;
let name : string = "Matteo";
console.log(age);
console.log(name);


let id : string | number;
id = 2;
console.log(id);


function checkNumber(a: number): string {
    if(a > 0){
        return "The number is positive"
    } else if (a < 0) {
        return "The number is negative"
    } else {
        return "The number is 0"
    }
}

console.log(checkNumber(2))


function getDetails(name: string , age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old`
    return [name, age, greeting]
};

const details = getDetails("Alice", 25);
console.log(details)


type Person = {
    name: string;
    age: number
};

function createPerson(name: string , age: number): Person {
    return {name, age}
};

const person = createPerson("Matteo", 37);
console.log(person);


const getDom = document.getElementById("some-input") as HTMLInputElement;
getDom.value = "Click Here";


function getAction(role: string): string {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View contenr";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role"
    }
}

console.log(getAction("admin")); 
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest")); 
console.log(getAction("unknown")); 


function greet (a: type = "Hello, stranger!"): ReturnType {
    return a
}

console.log(greet("Alice"));
console.log(greet());


