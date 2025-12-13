#Exercise 1: Random Sentence Generator
#Goal: Create a program that generates a random sentence of a specified length from a word list.
#Download the provided word list and save it in your development directory.
#Create a function to read the words from the file.
#Create a function to generate a random sentence of a given length.
#Create a main function to handle user input and program flow.
#Step 1: Create the get_words_from_file function
#Open the file in read mode ("r").
#Read the file content.
#Split the content into a list of words.
#Return the list of words.
#Step 2: Create the get_random_sentence function
#Create a function named get_random_sentence that takes the sentence length as an argument.
#Call get_words_from_file to get the list of words.
#Select a random word from the list length times.
#Create a sentence with the selected words.
#Convert the sentence to lowercase.
#Return the sentence.
#Step 3: Create the main function
#Create a function named main.
#Print a message explaining the program’s purpose.
#Ask the user for the desired sentence length.
#Validate the user input:
#Check if it is an integer.
#Check if it is between 2 and 20 (inclusive).
#If the input is invalid, print an error message and exit.
#If the input is valid, call get_random_sentence with the length and print the generated sentence.

import random

#Step 1: Create the get_words_from_file function
#Open the file in read mode ("r").
#Read the file content.
#Split the content into a list of words.
#Return the list of words.
def get_words_from_file(file):
    with open(file, 'r', encoding = 'utf-8') as f:
        file_read = f.read() 
        file_list = file_read.split()
    return file_list
        
#Step 2: Create the get_random_sentence function
#Create a function named get_random_sentence that takes the sentence length as an argument.
#Call get_words_from_file to get the list of words.
#Select a random word from the list length times.
#Create a sentence with the selected words.
#Convert the sentence to lowercase.
#Return the sentence.
def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    sentence_words = []
    for i in range(length):
        sentence_words.append(random.choice(words))
    new_sentence = " ".join(sentence_words)
    lowercase_sentence = new_sentence.lower()
    return lowercase_sentence

#Step 3: Create the main function
#Create a function named main.
#Print a message explaining the program’s purpose.
#Ask the user for the desired sentence length.
#Validate the user input:
#Check if it is an integer.
#Check if it is between 2 and 20 (inclusive).
#If the input is invalid, print an error message and exit.
#If the input is valid, call get_random_sentence with the length and print the generated sentence.
def main():
    print("The goal is to create a program that generates a random sentence of a specified length from a word list.")
    while True:
        try:
            sentence_length = int(input("Please type the desired sentence length: "))
            if sentence_length >= 2 and sentence_length <= 20:
                final_sentence = get_random_sentence(sentence_length)
                print(final_sentence)
                break
            else:
                print("The number must be between 2 and 20")
        except ValueError:
            print("Please enter a digit")


main()
           
#Exercise 2: Working with JSON
#Goal: Access a nested key in a JSON string, add a new key, and save the modified JSON to a file.
#Access the nested “salary” key.
#Add a new key “birth_date” wich value is of format “YYYY-MM-DD”, to the “employee” dictionary: "birth_date": "YYYY-MM-DD".
#Save the modified JSON to a file.
#Step 1: Load the JSON string
#Import the json module.
#se json.loads() to parse the JSON string into a Python dictionary.
#Step 2: Access the nested “salary” key
#Access the “salary” key using nested dictionary access (e.g., data["company"]["employee"]["payable"]["salary"]).
#Print the value of the “salary” key.
#Step 3: Add the “birth_date” key
#Add a new key-value pair to the “employee” dictionary: "birth_date": "YYYY-MM-DD".
#Replace "YYYY-MM-DD" with an actual date.
#Step 4: Save the JSON to a file
#Open a file in write mode ("w").
#Use json.dump() to write the modified dictionary to the file in JSON format.
#Use the indent parameter to make the JSON file more readable.

import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


#Convert JSON into a Python dictionary
dictionary = json.loads(sampleJson)
print(dictionary)
#Access the nested "salary" key
print(dictionary["company"]["employee"]["payable"]["salary"])
#Add a new key-value pair to the employee dictionary
dictionary["company"]["employee"]["birth_date"] = "1986-12-17"
print(dictionary)
#Save the JSON to a file
with open(f'{dir_path}/dictionary.json', 'w') as f:
    json.dump(dictionary,f, indent = 4)