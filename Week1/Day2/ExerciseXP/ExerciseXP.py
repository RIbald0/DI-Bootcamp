#1.Favorite Numbers
#Create a set called my_fav_numbers and populate it with your favorite numbers.
#Add two new numbers to the set.
#Remove the last number you added to the set.
#Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
#Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
#Note: Sets are unordered collections, so ensure no duplicate numbers are added.

#Creating a set of my favourite numbers
my_fav_numbers = {4, 22, 70, 55}
#Adding 2 new numbers to the set
my_fav_numbers.add(8)
my_fav_numbers.add(66)
print(my_fav_numbers)
#Remove the last number added to the set
my_fav_numbers.remove(66)
print(my_fav_numbers)
#Create a new set of numbers
friend_fav_numbers = {20, 99, 12, 88}
#Add the new set to the previous one and print it in a new variable
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#2Tuple
#Given a tuple of integers, try to add more integers to the tuple.
#Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.

#my_tuple = (4, 10, 44, 77, 60)
#my_tuple.append(22, 80, 37)
#print(my_tuple)
#Tuples are immutable so the content cannot change

#3.List Manipulation
#You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
#Remove "Banana" from the list.
#Remove "Blueberries" from the list.
#Add "Kiwi" to the end of the list.
#Add "Apples" to the beginning of the list.
#Count how many times "Apples" appear in the list.
#Empty the list.
#Print the final state of the list.

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
#Remove Banana
basket.remove("Banana")
print(basket)
#Remove Blueberries
basket.remove("Blueberries")
print(basket)
#Add Kiwi at the end of the list
basket.append("Kiwi")
print(basket)
#Add Apples at the beginning of the list
basket.insert(0, "Apples")
print(basket)
#Count how many times Apples appear on the list
print(basket.count("Apples"))
#Clear the list and print it
basket.clear()
print(basket)

#4.Floats
#Recap: What is a float? What’s the difference between a float and an integer?
#Create a list containing the following sequence of mixed floats and integers:
#1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
#Avoid hard-coding each number manually.
#Think: Can you generate this sequence using a loop or another method?

#Float is a number that can have a fractional or decimal part - Integer is a whole number
#Create a variable num and assign to it 1.5
num = 1.5
#Create a loop that continues till num is <= 5 and add 0.5 each time
while num <= 5:
        print(num)
        num += 0.5


#5.For Loop
#Write a for loop to print all numbers from 1 to 20, inclusive.
#Write another for loop that prints every number from 1 to 20 where the index is even.

numbers = range(1,21)
for number in numbers:
        print(number)

for number in numbers:
        if number % 2 == 0:
                print(number)

#6.While Loop
#Write a while loop that keeps asking the user to enter their name.
#Stop the loop if the user’s input is your name.

while True:

        user_name = input("Enter your name: ")
        name = "Matteo"
        if user_name.lower() == name.lower():
                print("Wow!My name too is Matteo")
                break   
        else:
                print("Enter your name again!")

#7.Favorite Fruits
#Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
#Store these fruits in a list.
#Ask the user to input the name of any fruit.
#If the fruit is in their list of favorite fruits, print:
#"You chose one of your favorite fruits! Enjoy!"
#If not, print:
#"You chose a new fruit. I hope you enjoy it!"

favourite_fruits = input("What are your favourite fruits?")
list_favourite_fruits = favourite_fruits.split()
print(list_favourite_fruits)
any_fruit = input("Type any fruit: ")
if any_fruit in list_favourite_fruits:
        print("You chose one of your favorite fruits! Enjoy!")
else:
        print("You chose a new fruit. I hope you enjoy it!")


#8.Pizza Toppings
#Write a loop that asks the user to enter pizza toppings one by one.
#Stop the loop when the user types 'quit'.
#For each topping entered, print:
#"Adding [topping] to your pizza."
#After exiting the loop, print all the toppings and the total cost of the pizza.
#The base price is $10, and each topping adds $2.50.
        

base_price = 10
topping_list = []
while True:
        topping = input("Enter your pizza toppings one by one, quit when you finished: ")
        if topping.lower() == "quit":
                break
        else:
                print(f"Adding {topping} to your pizza.")
                topping_list.append(topping)
print("Your toppings are:", topping_list)
total_cost = base_price + len(topping_list) * 2.5
print(f"Total cost is ${total_cost}")

#9.Cinemax Tickets
#Ask for the age of each person in a family who wants to buy a movie ticket.
#Calculate the total cost based on the following rules:
#Free for people under 3.
#$10 for people aged 3 to 12.
#$15 for anyone over 12.
#Print the total ticket cost.
#Bonus:
#Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
#Write a program to:
#Ask for each person’s age.
#Remove anyone who isn’t allowed to watch.
#Print the final list of attendees.

young_ticket = 10
adult_ticket = 15
total_cost = 0
while True:
    age = input("Enter your age and digit quit when you do not need tickets anymore: ")
    if age.lower() == "quit":
        print(f"Total cost is ${total_cost}")
        break
    elif int(age) < 3:
        print("The ticket is free")
    elif 3 <= int(age) <= 12:
        print(f"The ticket is ${young_ticket}")
        total_cost += young_ticket
    else:
        print("The ticket is $15")
        total_cost += adult_ticket
        

watchers = []
while True:
    age = input("Add your age here: ")
    if age.lower() == "quit":
        print(watchers)
        break
    if int(age) < 16:
        print("You are too young to watch this movie")
    elif 16 <= int(age) <= 21:
        print("You can watch the movie")
        watchers.append(age)
    else:
        print("You are too old for this movie")

#10.Sandwich Orders
#Using the list:
#sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
#The deli has run out of “Pastrami”, so use a loop to remove all instances of “Pastrami” from the list.
#Prepare each sandwich, one by one, and move them to a list called finished_sandwiches.
#Print a message for each sandwich made, such as: "I made your Tuna sandwich."
#Print the final list of all finished sandwiches.

finished_sandwiches = []
sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
while "Pastrami" in sandwich_orders:
    sandwich_orders.remove("Pastrami")
print(sandwich_orders)
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich} sandwich.")

print(finished_sandwiches)