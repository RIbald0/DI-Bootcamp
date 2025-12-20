class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getEmployeeInfo(): string {
        return `${this.name}: ${this.position}`
    }
}

let employee = new Employee("Matteo", 18000,  "Technical Support", "Customer Care");
console.log(employee.getEmployeeInfo());


class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price
    }

    getProductInfo(): string {
        return `${this.name}: ${this.price}`
    }
}

let product = new Product(1, "Tablet", 300);
product.id = 2;


class Animal {
    public name: string;

    constructor(name: string){
        this.name = name;
    }

    makeSound(): string {
        return `${this.name} makes a sound`
    }
}

class Dog extends Animal {
    constructor(name: string){
        super(name)
    }

    makeSound(): string {
        return `${this.name} is making a bark`
    }
}

let dog = new Dog("Rex");
console.log(dog.makeSound());


class Calculator {
    static add(a:number, b:number): number {
        return a + b;
    }

    static substract(a:number, b:number): number {
        return a - b;
    }
}

console.log(Calculator.add(2,2));
console.log(Calculator.substract(4,2));


interface User {
    readonly id: number;
    name: string;
    email: string
}

interface PremiumUser extends User {
    membershipLevel?: number;
}

function printUserDetails(user: PremiumUser): string{
    return `ID: ${user.id}, Name: ${user.name}, Email ${user.email}, Membership: ${user.membershipLevel}`
}

const user1: PremiumUser = {
    id: 1,
    name: "Matteo",
    email: "test@gmail.com"
}

const user2: PremiumUser = {
    id: 1,
    name: "Gal",
    email: "test2@gmail.com",
    membershipLevel: 1
}

console.log(printUserDetails(user1));
console.log(printUserDetails(user2));


