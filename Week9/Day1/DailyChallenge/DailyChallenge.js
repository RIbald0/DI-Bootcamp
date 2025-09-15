//Daily challenge: Groceries

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}


const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit))
}


const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log(user); // It will give "John" as value because 'user' gets a photocopy of the text from the original 'client', so changing the original doesn't affect the copy.
    let shopping = groceries;
    shopping.totalPrice = "35$";
    console.log(groceries.totalPrice); // It gives the new value because for object and arrays equilizing the two variables does not create a copy
    shopping.other.paid = false;
    console.log(groceries.other.paid); // It gives the new value because for object and arrays equilizing the two variables does not create a copy

}



displayGroceries()
cloneGroceries()