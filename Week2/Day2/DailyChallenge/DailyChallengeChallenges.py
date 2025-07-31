#Challenge 1: Sorting
#Write a Python program that takes a single string of words as input, where the words are separated by commas (e.g., ‘apple,banana,cherry’). The program should output these words sorted in alphabetical order, with the sorted words also separated by commas.
#Step 1: Get Input
#Use the input() function to get a string of words from the user.
#The words will be separated by commas.
#Step 2: Split the String
#Step 3: Sort the List
#Step 4: Join the Sorted List
#Step 5: Print the Result
#Print the resulting comma-separated string.
#Expected Output:
#If the input is without,hello,bag,world, the output should be bag,hello,without,world.


string = input("Please add a list of words separated by commas: ").lower()
words_list = string.split(',')
print(words_list)
list_without_comma = [comma.strip(',') for comma in words_list]
print(list_without_comma)
list_without_comma.sort()
print(list_without_comma)
final_string = ','.join(list_without_comma)
print(final_string)



#Challenge 2: Longest Word
#Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple longest words, return the first one encountered. Characters like apostrophes, commas, and periods should be considered part of the word.
#Step 1: Define the Function
#Define a function that takes a string (the sentence) as a parameter.
#Step 2: Split the Sentence into Words
#Step 3: Initialize Variables
#Step 4: Iterate Through the Words
#Step 5: Compare Word Lengths
#Step 6: Return the Longest Word
#Expected Output:
#longest_word("Margaret's toy is a pretty doll.") should return "Margaret's".
#longest_word("A thing of beauty is a joy forever.") should return "forever.".
#longest_word("Forgetfulness is by all means powerless!") should return "Forgetfulness".

#Write a string
sentence = 'No Gods or Kings, only man'
#Split the words of the string into a list
sentence_splitted = sentence.split()
print(sentence_splitted)
#Initilize variables in order to create a for loop to calculate the lenght of the longest word
longest_word = ''
max_lenght = 0
#For loop that calculate the lenght of the longest word
for i in sentence_splitted:
    current_lenght = len(i)
    if current_lenght > max_lenght:
        max_lenght = current_lenght
        longest_word = i
#Print the longest word
print(longest_word)


def longest_word(sentence):
    sentence_splitted = sentence.split()
    longest_word = ''
    max_lenght = 0
    for i in sentence_splitted:
        current_lenght = len(i)
        if current_lenght > max_lenght:
            max_lenght = current_lenght
            longest_word = i
    return longest_word

print(longest_word('No God or Kings, only Man'))


