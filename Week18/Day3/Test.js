const person = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    country: "Fictional",
  },
};

const person2 = {
    ...person,
    age: 31,
    address: {
        ...person.addressaddress,
        city: 'Dreamland'
    }
}

console.log(person2)