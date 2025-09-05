//Exercise 1 : Find the numbers divisible by 23


function displayNumbersDivisible(divisor) {
    let sum = 0
    let numbers = ''
    for (let i = 0; i < 501; i++) {
        if (i % divisor == 0) {
            sum = sum + i
            numbers = numbers + i + ' '
        }

    }
    sum = `Sum: ${sum}`
    console.log(numbers)
    console.log(sum)
}

displayNumbersDivisible(23)
displayNumbersDivisible(55)


//Exercise 2 : Shopping List

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

shoppingList = ['banana', 'orange', 'apple']


function myBill() {
    total_price = 0
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i] in stock) {
            if (stock[shoppingList[i]] > 0) {
                total_price = total_price + prices[shoppingList[i]]
                stock[shoppingList[i]] = stock[shoppingList[i]] - 1
            }
        }
    } return total_price
}

console.log(myBill())
console.log(stock)


//Exercise 3 : What’s in my wallet ?

function changeEnough(itemPrice, amountOfChange) {
    let total_change =
        (amountOfChange[0] * 0.25) +
        (amountOfChange[1] * 0.10) +
        (amountOfChange[2] * 0.05) +
        (amountOfChange[3] * 0.01);
    console.log(`The total amount of my change is $${total_change}`)
    if (total_change >= itemPrice) {
        return true
    } else {
        return false
    }
}


console.log(changeEnough(4.25, [25, 20, 5, 0]))


//Exercise 4 : Vacations Costs

function hotelCost(nights) {
    total_price = 0
    total_price = total_price + (140 * nights)
    return total_price
}


function planeRideCost(destination) {
    if
        (destination === "London") {
        return 183
    } else if
        (destination === "Paris") {
        return 220
    } else {
        return 300
    }
}

function rentalCarCost(days) {
    let total_price = 0
    if (days > 10) {
        let discount_price = ((40 * days) * 0.05)
        let full_price = 40 * days
        total_price = full_price - discount_price
    } else {
        total_price = total_price + (40 * days)
    }
    return total_price
}


function totalVacationCost() {
    let nights;
    while (!nights || isNaN(nights)) {
        nights = prompt('How many nights would you like to stay? ')
    }
    let destination;
    while (!destination || !isNaN(destination)) {
        destination = prompt('What is your destination? ')
    }
    let days;
    while (!days || isNaN(days)) {
        days = prompt('How many days would you like to rent the car for? ')
    }

    let hotel = hotelCost(nights)
    let plane = planeRideCost(destination)
    let car = rentalCarCost(days)

    return `The car costs:$${car}, the hotel costs:$${hotel}, the plane ticket costs:$${plane}`

}

console.log(totalVacationCost())