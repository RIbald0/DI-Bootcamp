#1.Hello Word
# Print the following output in one line of code:
#Hello world
#Hello world
#Hello world
#Hello world

print("Hello World\n" *4)

#2.Some Math
# Write code that calculates the result of:
#(99^3)*8 (meaning 99 to the power of 3, times 8).

print(int(99**3)*8)

#3.What is the output?
# Predict the output of the following code snippets:
#>>> 5 < 3
#>>> 3 == 3
#>>> 3 == "3"
#>>> "3" > 3
#>>> "Hello" == "hello"

False
True
False #Python allows comparing values of different types for equality
#Error #Python does not allow comparisons between incompatible types
False

#4.Your Computer brand
# Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable, print a sentence that states the following:
#"I have a <computer_brand> computer."

computer_brand = "lenovo"
print(f"I have a {computer_brand} computer.")

#5.Your information
#Create a variable called name, and set it’s value to your name.
#Create a variable called age, and set it’s value to your age.
#Create a variable called shoe_size, and set it’s value to your shoe size.
#Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2, and 3.
#Have your code print the info message.
#Run your code.

name = "Matteo"
age = 36
shoe_size = 43
info = "My name is " + name + ", I am " + str(age) + " years old and my shoe size is " + str(shoe_size)

print(info)

#6.A & B
#Create two variables, a and b.
#Each variable’s value should be a number.
#If a is bigger than b, have your code print "Hello World".

a = 8
b = 6

if a > b:
    print("Hello World")
else:
    print("Hello Moon")

#7.Odd or Even
#Write code that asks the user for a number and determines whether this number is odd or even.
while True:
    try:
        number = int(input("Write a number: "))

        if number % 2 == 0:
            print("Your number is even")
        else:
            print("Your number is odd")
        break
    except:
            print("Please print a number!")

#8.What's your name?
#Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.

user_name = input("What is your name? ")
name = "Matteo"
if user_name.capitalize() == name.capitalize():
    print("Funny! " + user_name.capitalize() + " is my name too")
else:
    print("Your name is " + user_name)

#9. Tall enough to ride a roller coaster
#Write code that will ask the user for their height in centimeters.
#If they are over 145 cm, print a message that states they are tall enough to ride.
#If they are not tall enough, print a message that says they need to grow some more to ride.
while True:
    try:
        user_height = int(input("What is your height? "))

        if user_height > 145:
            print("You are tall enough to ride")
        else:
            print("You need to grow some more to ride")
        break
    except:
        print("Please print only a number")