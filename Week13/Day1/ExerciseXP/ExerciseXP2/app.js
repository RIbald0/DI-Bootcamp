import { persons } from "./data.js";

const avgAge = () => {
    const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
    const avgAge = totalAge / persons.length
    console.log(avgAge)
}

avgAge()