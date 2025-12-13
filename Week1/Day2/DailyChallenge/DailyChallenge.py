#Challenge1: Multiples of a Number
#1. Ask the user for two inputs:
#A number (integer).
#A length (integer).
#2. Create a program that generates a list of multiples of the given number.
#3. The list should stop when it reaches the length specified by the user.
#Example 1:
#Input:
#number: 7
#length: 5
#Output:
#[7, 14, 21, 28, 35]
#Example 2:
#Input:
#number: 12
#length: 10
#Output:
#[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
#Example 3:
#Input:
#number: 17
#length: 6
#Output:
#[17, 34, 51, 68, 85, 102]


#Create a list to store the list of numbers
list_numbers = []
#Ask 2 user inputs:number and lenght
number = int(input("Add a number: "))
length = int(input("Add a length: "))
#Start a loop in lenght(since int we need to use range)
for i in range(length):
#Add operation to multiple the number during the loop and append it to the list of the numbers
    number * (i + 1)
    list_numbers.append(number * (i + 1))
#Finally print the list
print(list_numbers)

#Challenge 2: Remove Consecutive Duplicate Letters
#1.Ask the user for a string.
#2. Write a program that processes the string to remove consecutive duplicate letters.
#The new string should only contain unique consecutive letters.
#For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).
#3. The program should print the modified string.
#Example 1:
#Input:
#user’s word: "ppoeemm"
#Output:
#"poem"
#Example 2:
#Input:
#user’s word: "wiiiinnnnd"
#Output:
#"wind"
#Example 3:
#Input:
#user’s word: "ttiiitllleeee"
#Output:
#"title"
#Example 4:
#Input:
#user’s word: "cccccaaarrrbbonnnnn"
#Output:
#"carbon"
#Notes:
#The final string will not include any consecutive duplicates, but non-consecutive duplicates are allowed.
#Example: In "carbon", the two ‘r’s are allowed because they are not consecutive.

#create the final string that will store the charachters with no consecutive duplicates
new_string = ""
#will track the last character added, to compare
previous_char = ""
#user input asking for a string
string = input("Add a string: ")

#loop to go through each index on the inputted string
for i in range(len(string)):
#if the character is not the previous one
    if string[i] != previous_char:
#add the character to the new string and update previous char so that can be compared again
        new_string += string[i]
        previous_char = string[i]
#print the new string
print(new_string)



