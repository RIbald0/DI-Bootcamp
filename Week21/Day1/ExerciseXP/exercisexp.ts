type Person = {
    name: string,
    age: number
};

type Address = {
    street: string,
    city: string
};

type PersonWithAddress = Person & Address;

let person: PersonWithAddress = {
    name: "John",
    age: 25,
    street: "blablabla",
    city: "Tel aviv"
};


type value = number | string

function describeValue(a: value): string {
    if(typeof a === "number"){
        return `This is a number: ${a}`
    }

    if(typeof a === "string"){
        return `This is a string: ${a}`
    }

    throw new Error(
        "Invalid argument. The argument must be either a number or a string."
    )
};


let someValue : any;
let valueLength = (someValue as string).length;
console.log(valueLength);


function getFirstElement(arr: (number | string)[]){
    return arr[0] as string
};

getFirstElement([1]);
getFirstElement(["test"]);


function logLength<T extends string | string[] | number[] | boolean[]>(item: T): void {
    console.log(item.length)
}

logLength("test");


type Person = {
    name: string;
    age: number;
}

type Job = {
    position: string;
    department: string;
}

type Employee = Person & Job

function describeEmployee(a: Employee): string {
    if(a.position === "Manager"){
        return "The job is Manager"
    } else if(a.position === "Developer"){
        return "The job is Developer"
    }
    throw new Error(
        "Invalid argument. The position must be either Manager or developer"
    )
};


interface Stringifiable {
    toString(): string;
}

function formatInput<T extends Stringifiable>(arg: T){
    return (arg as Stringifiable).toString()
}