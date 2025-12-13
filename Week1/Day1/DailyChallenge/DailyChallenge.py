#Daily Challenge: Build up a string

#1. Ask for User Input:
#The string must be exactly 10 characters long.
#2. Check the Length of the String:
#If the string is less than 10 characters, print: "String not long enough."
#If the string is more than 10 characters, print: "String too long."
#If the string is exactly 10 characters, print: "Perfect string" and proceed to the next steps.
#3. Print the First and Last Characters:
#Once the string is validated, print the first and last characters.
#4. Build the String Character by Character:
#Using a for loop, construct and print the string character by character. Start with the first character, then the first two characters, and so on, until the entire string is printed.
#Hint: You can create a loop that goes through the string, adding one character at a time, and print it progressively.
#5. Bonus: Jumble the String (Optional)
#As a bonus, try shuffling the characters in the string and print the newly jumbled string.
#Hint: You can use the random.shuffle function to shuffle a list of characters.



#While Loop to define if the string is too long, too short, or contains 10 characters
import random

while True:
    sentence = input("Add a sentence: ")
    sentence_lenght = len(sentence)
    if sentence_lenght < 10:
        print("String not long enough.")
    elif sentence_lenght > 10:
        print("String too long")
    else:
        if sentence_lenght == 10:
            print("Perfect String")
            break

#print first and last character of the string that solves the loop

print(sentence[0])
print(sentence[-1])

#for loop to iterate over the sentence for characters
for character in range(len(sentence)):
    print(sentence[:character+1])

#shuffling the character with random.shuffle
shuffle = list(sentence)        
random.shuffle(shuffle)         
new_string = "".join(shuffle)   
print(new_string)

    