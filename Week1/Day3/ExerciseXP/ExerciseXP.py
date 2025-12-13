#Exercise 1: Converting Lists into Dictionaries
#You are given two lists. Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.
#Lists:
#keys = ['Ten', 'Twenty', 'Thirty']
#values = [10, 20, 30]
#Expected Output:
#{'Ten': 10, 'Twenty': 20, 'Thirty': 30}

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

#Using dict() function together with zip to pair keys to values and convert into a dictionary
dictionary = dict(zip(keys, values))
print(dictionary)

#Exercise 2: Cinemax #2
#Write a program that calculates the total cost of movie tickets for a family based on their ages.
#Family members’ ages are stored in a dictionary.
#The ticket pricing rules are as follows:
#Under 3 years old: Free
#3 to 12 years old: $10
#Over 12 years old: $15
#Family Data:
#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#Loop through the family dictionary to calculate the total cost.
#Print the ticket price for each family member.
#Print the total cost at the end.
#Bonus:
#Allow the user to input family members’ names and ages, then calculate the total ticket cost.

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#Create a total_cost variable, and 2 variables for tickets that cost 10 and 15 dollars
total_cost = 0
ticket_price_young = 10
ticket_price_old = 15

#Start to loop into the dictionary with a if statement that is supposed to increase total cost based on the age
for name, age in family.items():
    if age < 3:
        total_cost += 0
        print(f"The ticket price is free")
    elif age >= 3 and age <=12:
        total_cost += ticket_price_young
        print(f"The ticket price is ${ticket_price_young}")
    else:
        print(f"The ticket price is ${ticket_price_old}")
        total_cost += ticket_price_old
print(total_cost)


#Bonus
#Create a dictionary that will contain the family information
my_dict = {}

#While loop that will break if 'done' is print on it and that is supposed to get the name and age of the family members
while True:
    name = input("Add your name or 'done' to finish: ")
    if name.lower() == 'done':
        break
    age = int(input("Add your age: "))
    my_dict[name] = age

#Print the dictionary with the family information
print(my_dict)


#Do the same like the previous exercise
total_cost = 0
ticket_price_young = 10
ticket_price_old = 15

for name, age in my_dict.items():
    if age < 3:
        total_cost += 0
        print(f"The ticket price is free")
    elif age >= 3 and age <=12:
        total_cost += ticket_price_young
        print(f"The ticket price is ${ticket_price_young}")
    else:
        print(f"The ticket price is ${ticket_price_old}")
        total_cost += ticket_price_old
print(total_cost)


#Exercise 3: Zara
#Create and manipulate a dictionary that contains information about the Zara brand.
#Brand Information:
#name: Zara
#creation_date: 1975
#creator_name: Amancio Ortega Gaona
#type_of_clothes: men, women, children, home
#international_competitors: Gap, H&M, Benetton
#number_stores: 7000
#major_color: 
#    France: blue, 
#    Spain: red, 
#    US: pink, green

#Create a dictionary called brand with the provided data.
#Modify and access the dictionary as follows:
#Change the value of number_stores to 2.
#Print a sentence describing Zara’s clients using the type_of_clothes key.
#Add a new key country_creation with the value Spain.
#Check if international_competitors exists and, if so, add “Desigual” to the list.
#Delete the creation_date key.
#Print the last item in international_competitors.
#Print the major colors in the US.
#Print the number of keys in the dictionary.
#Print all keys of the dictionary.

#Bonus:
#Create another dictionary called more_on_zara with creation_date and number_stores. Merge this dictionary with the original brand dictionary and print the result.

#Make the brand into a dictionary
brand = {
    'name':'Zara',
    'creation_date': 1975,
    'creator_name': "Amacio Ortega Gaona",
    'type_of_clothes': 'men, women, children, home',
    'international_competitors': 'Gap, H&M, Benetton',
    'number_stores': 7000,
    'major_color':{
        'France': 'blue',
        'Spain': 'red',
        'US': 'pink, green',
    }
        
}

print(brand)

#Change a key value in the dictionary
brand['number_stores'] = 2
print(brand)

#Print a sentence with a key of the dictionary
print(f'Zara\'s clients use {brand['type_of_clothes']} type of clothes')

#Add a new entry to the dictionary
brand['country_creation'] = 'Spain'
print(brand)

#If statement to check if a key exists and if it is add a value in it

if 'international_competitors' in brand:
    list_brand = brand['international_competitors'].split(', ')
    brand['international_competitors'] = list_brand
    list_brand.append('Desigual')
print(brand)

#Delete the creation_date key

if 'creation_date' in brand:
    del brand['creation_date']
print(brand)

#Accessing the last element of the international_competitors key

print(brand['international_competitors'][-1])

#Print the major colors in the US

print(brand['major_color']['US'])

#Print the number of keys in the dictionary

print(len(brand))

#Print all keys in the dictionary

#Create a new dictionare and add 2 elements and merge them into the previous dictionary
print(brand.keys())

more_on_zara = {
    'creation_date': 1975,
    'number_stores': 7000
}

brand.update(more_on_zara)
print(brand)


#Exercise 4: Disney Characters
#You are given a list of Disney characters. Create three dictionaries based on different patterns as shown below:
#Character List:
#users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
#Expected Results:
#1. Create a dictionary that maps characters to their indices:
#{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
#2. Create a dictionary that maps indices to characters:
#{0: "Mickey", 1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
#3. Create a dictionary where characters are sorted alphabetically and mapped to their indices:
#{"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
# Using dictionary comprehension with enumerate to swap order:
result = {user: index for index, user in enumerate(users)}
print(result)
# Opposite of above
result_2= {index: user for index, user in enumerate(users)}
print(result_2)
#Sort the list and then do a dict comprehension
sorted_users = sorted(users)
result_3 = {user: index for index, user in enumerate(sorted_users)}
print(result_3)
