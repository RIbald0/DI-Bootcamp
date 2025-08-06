#Exercise 1: Currencies
#Goal: Implement dunder methods for a Currency class to handle string representation, integer conversion, addition, and in-place addition.
#Key Python Topics:
#Dunder methods (__str__, __repr__, __int__, __add__, __iadd__)
#Type checking (isinstance())
#Raising exceptions (raise TypeError)
#class Currency:
#    def __init__(self, currency, amount):
#        self.currency = currency
#       self.amount = amount
#Using the code above, implement the relevant methods and dunder methods which will output the results below.
#Hint : When adding 2 currencies which don’t share the same label you should raise an error.

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount > 1:
            return f'{self.amount} {self.currency}s'
        else:
            return f'{self.amount} {self.currency}'
        
    def __int__(self):
        return self.amount
    
    def __repr__(self):
                if self.amount > 1:
                 return f'{self.amount} {self.currency}s'
                else:
                 return f'{self.amount} {self.currency}'
                
    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        elif isinstance (other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            
    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
        elif isinstance(other, Currency):
             if self.currency == other.currency:
                self.amount += other.amount
             else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        else:
            raise TypeError("Unsupported type for addition")
    
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1) 
c1 += 5
print(c1)
c1 += c2
print(c1)
#print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>


# Exercise 3: String module
#Goal: Generate a random string of length 5 using the string module.
#Use the string module to generate a random string of length 5, consisting of uppercase and lowercase letters only.
#Step 1: Import the string and random modules
#Import the string and random modules.
#Step 2: Create a string of all letters
#Read about the strings methods HERE to find the best methods for this step
#Step 3: Generate a random string
#Use a loop to select 5 random characters from the combined string.
#Concatenate the characters to form the random string.

import random, string

sentence = string.ascii_letters

random_characters = random.sample(sentence, 5)

final_sentence = "".join(random_characters)
print(final_sentence)


# Exercise 4: Current Date
#Goal: Create a function that displays the current date.
#Use the datetime module to create a function that displays the current date.
#Step 1: Import the datetime module
#Step 2: Get the current date
#Step 3: Display the date

import datetime

today_date = datetime.date.today()
print(today_date)


# Exercise 5: Amount of time left until January 1st
#Goal: Create a function that displays the amount of time left until January 1st.
#Use the datetime module to calculate and display the time left until January 1st.
#Step 1: Import the datetime module
#Step 2: Get the current date and time
#Step 3: Create a datetime object for January 1st of the next year
#Step 4: Calculate the time difference
#Step 5: Display the time difference

import datetime

today_date = datetime.datetime.now()

x = datetime.datetime(2026, 1, 1)

difference = x - today_date
print(difference)


#Exercise 6: Birthday and minutes
#Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

import datetime

def my_birthday (birthdate):
    datetime_object = datetime.datetime.strptime(birthdate, '%m/%d/%Y %H:%M:%S')
    now = datetime.datetime.now()
    difference = now - datetime_object
    minutes = difference.total_seconds() / 60
    print(f"You have lived approximately {int(minutes):,} minutes.")

    
my_birthday('11/04/1988 13:20:50')


#Exercise 7: Faker Module
#Goal: Use the faker module to generate fake user data and store it in a list of dictionaries.
#Install the faker module and use it to create a list of dictionaries, where each dictionary represents a user with fake data.
#Step 1: Install the faker module
#Step 2: Import the faker module
#Step 3: Create an empty list of users
#Step 4: Create a function to add users
#Create a function that takes the number of users to generate as an argument.
#Inside the function, use a loop to generate the specified number of users.
#For each user, create a dictionary with the keys name, address, and language_code.
#Use the faker instance to generate fake data for each key:
#name: faker.name()
#address: faker.address()
#language_code: faker.language_code()
#Append the user dictionary to the users list.
#Step 5: Call the function and print the users list


import faker

users = []

def add_users(amount):
    fake = faker.Faker()
    for user in range(amount):
        users_dict = {'name':fake.name(), 'address':fake.address(), 'language_code': fake.language_code()}
        users.append(users_dict)

add_users(2)
for user in users:
    print(user)