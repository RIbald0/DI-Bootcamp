#Challenge 1: Letter Index Dictionary
#Goal: Create a dictionary that stores the indices (number of the position) of each letter in a word provided by the user(input()).
# User Input:
#Ask the user to enter a word.
#Store the input word in a variable.
#Creating the Dictionary:
#Iterate through each character of the input word using a loop.
#And check if the character is already a key in the dictionary.
#If it is, append the current index to the list associated with that key.
#If it is not, create a new key-value pair in the dictionary.
#Ensure that the characters (keys) are strings.
#Ensure that the indices (values) are stored in lists.


#Ask user input to write a word:
word = input('Add a word (not a number): ')
#Create an empty dictionary where we will store letters and indices
indices_dict = {}
#Loop with enumerate in order to get letter and index and check if it's already there append it if not create a new value
for index, letter in enumerate(word):
    if letter in indices_dict:
        indices_dict[letter].append(index)
    else:
        indices_dict[letter] = [index]
#Print the dictionary
print(indices_dict)

#Challenge 2: Affordable Items
#Goal: Create a program that prints a list of items that can be purchased with a given amount of money.
#1. Store Data:
#You will be provided with a dictionary (items_purchase) where the keys are the item names and the values are their prices (as strings with a dollar sign).
#You will also be given a string (wallet) representing the amount of money you have.
#2. Data Cleaning:
#3. Determining Affordable Items:
#4. Sorting and Output:
#Sort the list of affordable items in alphabetical order.
#If the list is empty (no items can be afforded), return the string “Nothing”.
#Otherwise, return the sorted list.

items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

#Data Cleaning - using replace and int() to transform and clean the string into integers
wallet_amount = int(wallet.replace("$","").replace(",",""))
for item, price in items_purchase.items():
    cleaned_price = int(price.replace('$', '').replace(',', ''))
    items_purchase[item] = cleaned_price
#Create an empty list where we will store the affordable items
affordable_items = []
#Create a loop that is suppose to append in the created list the items that are affordable
for item,price in items_purchase.items():
    if price <= wallet_amount:
        affordable_items.append(item)
#If no affordable items print nothing, else sort them and print them out
if affordable_items == []:
    print("Nothing")
else:
    sorted_affordable_items = sorted(affordable_items)
    print(sorted_affordable_items)

items_purchase_2 = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet_2 = "$100"

#Data Cleaning - using replace and int() to transform and clean the string into integers
wallet_amount_2 = int(wallet_2.replace("$","").replace(",",""))
for item, price in items_purchase_2.items():
    cleaned_price_2 = int(price.replace('$', '').replace(',', ''))
    items_purchase_2[item] = cleaned_price_2
#Create an empty list where we will store the affordable items
affordable_items_2 = []
#Create a loop that is suppose to append in the created list the items that are affordable
for item,price in items_purchase_2.items():
    if price <= wallet_amount_2:
        affordable_items_2.append(item)
#If no affordable items print nothing, else sort them and print them out
if affordable_items_2 == []:
    print("Nothing")
else:
    sorted_affordable_items_2 = sorted(affordable_items_2)
    print(sorted_affordable_items_2)


items_purchase_3 = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet_3 = "$1"

#Data Cleaning - using replace and int() to transform and clean the string into integers
wallet_amount_3 = int(wallet_3.replace("$","").replace(",",""))
for item, price in items_purchase_3.items():
    cleaned_price_3 = int(price.replace('$', '').replace(',', ''))
    items_purchase_3[item] = cleaned_price_3
#Create an empty list where we will store the affordable items
affordable_items_3 = []
#Create a loop that is suppose to append in the created list the items that are affordable
for item,price in items_purchase_3.items():
    if price <= wallet_amount_3:
        affordable_items_3.append(item)
#If no affordable items print nothing, else sort them and print them out
if affordable_items_3 == []:
    print("Nothing")
else:
    sorted_affordable_items_3 = sorted(affordable_items_3)
    print(sorted_affordable_items_3)
