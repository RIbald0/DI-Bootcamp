// Exercise 1 : Scope

//#1 the value of a is 3 with let, with const you get a TypeError because of trying to assign to a const variable
//#2 with funcThree we get the alert with a = 0, with funcTwo a = 5, then funcThree again a = 5 because of the previous function, with const we get the first function funcThree an alert with a = 0, then TypeError because we are trying to assign a variable to a const
//#3 function funcFour runs window.a and creates a global a variable with hellp as its value, then funcFive creates an alert that shows hello as value
//#4 funcSix creates an alert that gives a the value "test". With const you get the same result because of the let variable inside of its scope
//#5 inside of the block the alert shows the value 5, outside, the value 2. If a const variable is used, we get value 5 for the inside alert (due to let variable) and 2 for the outside


//Exercise 2 : Ternary operator

const winBattle = () => true
let experiencePoints = winBattle() === true ? 10 : 1
console.log(experiencePoints)


//Exercise 3 : Is it a string ?

const checkType = (parameter) => typeof parameter === "string" ? true : false;
console.log(checkType("Matteo"))
console.log(checkType(5))


//Exercise 4 : Find the sum

const sum = (num1, num2) => num1 + num2
console.log(sum(5, 10))


//Exercise 5 : Kg and grams

function giveGrams(kilos) {
    return kilos * 1000
}

const giveGrams2 = function (kilos) {
    return kilos * 1000
}

const giveGrams3 = (kilos) => kilos * 1000

console.log(giveGrams(5));
console.log(giveGrams(6));
console.log(giveGrams(7));

//The difference between a function declaration and a function expression is that in the latter we assign a variable to the function


//Exercise 6 : Fortune teller

(function (number_of_children, partner_name, geographic_location, job_title) {
    let sentence = `You will be a ${job_title} in ${geographic_location}, and married to ${partner_name} with ${number_of_children} kids.`;
    let newElement = document.createElement('p')
    newElement.textContent = sentence
    document.body.appendChild(newElement)
})(3, "Gal", "Israel", "Full Stack Developer");


//Exercise 7 : Welcome

(function (name) {
    navBar = document.getElementById('navbar')
    let newDiv = document.createElement('div')
    let nameContainer = document.createElement('span')
    let image = document.createElement('img')
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg'
    image.style.width = "50px"
    nameContainer.textContent = name
    newDiv.appendChild(nameContainer)
    newDiv.appendChild(image)
    navBar.appendChild(newDiv)
})("Matteo")


//Exercise 8 : Juice Bar

//function makeJuice(size) {
//    const ingredients = function(first, second, third){
//        let sentence = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`
//        let newElement = document.createElement('p')
//        newElement.textContent = sentence
//        document.body.appendChild(newElement)
//    }
//    ingredients("banana", "strawberry", "mango")
//}

//makeJuice("large")


function makeJuice(size) {
    const ingredients = []
    const addIngredients = function (first, second, third) {
        ingredients.push(first, second, third)}
    const displayJuice = function() {
        let sentence = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}`
        let newElement = document.createElement('p')
        newElement.textContent = sentence
        document.body.appendChild(newElement)
    }
    addIngredients("banana", "strawberry", "mango")
    addIngredients("apple", "orange", "peach")
    displayJuice()
}

makeJuice("large")



