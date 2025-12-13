#Exercise 1: Cats
#Use the provided Cat class to create three cat objects. Then, create a function to find the oldest cat and print its details.
#Step 1: Create Cat Objects
#Use the Cat class to create three cat objects with different names and ages.
#Step 2: Create a Function to Find the Oldest Cat
#Create a function that takes the three cat objects as input.
#Inside the function, compare the ages of the cats to find the oldest one.
#Return the oldest cat object.
#Step 3: Print the Oldest Cat’s Details
#Call the function to get the oldest cat.
#Print a formatted string: “The oldest cat is <cat_name>, and is <cat_age> years old.”
#Replace <cat_name> and <cat_age> with the oldest cat’s name and age.


#Initizialize Cat Class with 2 attributes, cat_name and cat_age
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

#Create 3 objects for the Cat class
cat1 = Cat('Salsiccia', 10)
cat2 = Cat('Tofu', 3)
cat3 = Cat('Pepe', 7)


#Create a function that finds the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1
    if cat2.age > oldest.age:
        oldest = cat2
    if cat3.age > oldest.age:
        oldest = cat3
    return oldest

#Assign a variable to the oldest cat and then print the result
oldest = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")
    


#Exercise 2 : Dogs
#Goal: Create a Dog class, instantiate objects, call methods, and compare dog sizes.
#Create a Dog class with methods for barking and jumping. Instantiate dog objects, call their methods, and compare their sizes.
#Step 1: Create the Dog Class
#Create a class called Dog.
#In the __init__ method, take name and height as parameters and create corresponding attributes.
#Create a bark() method that prints “ goes woof!”.
#Create a jump() method that prints “ jumps cm high!”, where x is height * 2.
#Step 2: Create Dog Objects
#Create davids_dog and sarahs_dog objects with their respective names and heights.
#Step 3: Print Dog Details and Call Methods
#Print the name and height of each dog.
#Call the bark() and jump() methods for each dog.
#Step 4: Compare Dog Sizes


#Initialize a Dog class with 2 attributes, dog_name and dog_height
class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
#Define a function method for bark that is supposed to print a formatted string
    def bark(self):
        print(f'{self.name} goes woof!')
#Define a function method for jump that is supposed to print the height of the jump *2
    def jump(self):
        print(f'{self.name} jumps {self.height * 2} cm high!')

#Create 2 objects davids_dog and sarahs_dog
davids_dog = Dog('Rex', 10)
sarahs_dog = Dog('Boxy', 5)
#Print their name and height
print(davids_dog.name)
print(davids_dog.height)
print(sarahs_dog.name)
print(sarahs_dog.height)
#Call theis methods
davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()
#Compare dog sizes
if davids_dog.height > sarahs_dog.height:
    print(f'{davids_dog.name} is taller than {sarahs_dog.name}')
elif davids_dog.height < sarahs_dog.height:
    print(f'{davids_dog.name} is shorter than {sarahs_dog.name}')
else:
    print(f'{davids_dog.name} has the same size of {sarahs_dog.name}')


#Exercise 3 : Who’s the song producer?
#Goal: Create a Song class to represent song lyrics and print them.
#Create a Song class with a method to print song lyrics line by line.
#Step 1: Create the Song Class
#Create a class called Song.
#In the __init__ method, take lyrics (a list) as a parameter and create a corresponding attribute.
#Create a sing_me_a_song() method that prints each element of the lyrics list on a new line.
#Example:
#stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"]


#Initialize Song class with lyrics as a parameter and create its attribute
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
#Create a sing_me_a_song method that prints each element of the lyrics list on a new line
    def sing_me_a_song(self):
        for i in self.lyrics:
            print(i)

#Create an object which is a list with different elements and call the method
stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


#Exercise 4 : Afternoon at the Zoo
#Goal: Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.
#Step 1: Define the Zoo Class
#1. Create a class called Zoo.
#2. Implement the __init__() method:
#It takes a string parameter zoo_name, representing the name of the zoo.
#Initialize an empty list called animals to keep track of animal names.
#3. Add a method add_animal(new_animal):
#This method adds a new animal to the animals list.
#Do not add the animal if it is already in the list.
#4. Add a method get_animals():
#This method prints all animals currently in the zoo.
#5. Add a method sell_animal(animal_sold):
#This method checks if a specified animal exists on the animals list and if so, remove from it.
#6. Add a method sort_animals():
#This method sorts the animals alphabetically.
#It also groups them by the first letter of their name.
#The result should be a dictionary where:
#Each key is a letter.
#Each value is a list of animals that start with that letter.
#Example output:
#{
#   'B': ['Baboon', 'Bear'],
#   'C': ['Cat', 'Cougar'],
#   'G': ['Giraffe'],
#  'L': ['Lion'],
#   'Z': ['Zebra']
#}
#7. Add a method get_groups():
#This method prints the grouped animals as created by sort_animals().
#Example output:
#B: ['Baboon', 'Bear']
#C: ['Cat', 'Cougar']
#G: ['Giraffe']
#Step 2: Create a Zoo Object
#Create an instance of the Zoo class and pass a name for the zoo.
#Step 3: Call the Zoo Methods
#Use the methods of your Zoo object to test adding, selling, displaying, sorting, and grouping animals.
#Example (No Internal Logic Provided)
#class Zoo:
#    def __init__(self, zoo_name):
#        pass
#    def add_animal(self, new_animal):
#        pass
#    def get_animals(self):
#        pass#
#    def sell_animal(self, animal_sold):
#        pass
#    def sort_animals(self):
#        pass
#    def get_groups(self):
#        pass
# Step 2: Create a Zoo instance
#brooklyn_safari = Zoo("Brooklyn Safari")
# Step 3: Use the Zoo methods
#brooklyn_safari.add_animal("Giraffe")
#brooklyn_safari.add_animal("Bear")
#brooklyn_safari.add_animal("Baboon")
#brooklyn_safari.get_animals()
#brooklyn_safari.sell_animal("Bear")
#brooklyn_safari.get_animals()
#brooklyn_safari.sort_animals()
#brooklyn_safari.get_groups()

#Inizialise a class Zoo with zoo_name as parameter and create it's attribut and an empty list
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

#Method that it's supposed to add a new animal in a list if it's not already in that list
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

#Method that prints the list as it appears in this moment
    def get_animals(self):
        print(self.animals)

#Method that's supposed to remove an animal from the list if it is in the list
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

#method that is supposed to sort the animals in the list alphabetically and that creates a dictionary with the first letter as key and animal as argument
    def sort_animals(self):
        self.animals.sort()
        dict_animals = {}
        for i in self.animals:
            first_letter = i[0]
            if first_letter in dict_animals:
                dict_animals[first_letter].append(i)
            else:
                dict_animals[first_letter] = [i]
        self.groups = dict_animals


#Print the sorted dictionary created before
    def get_groups(self):
        for letter, group in self.groups.items():
            print(f'{letter}: {group}')


brooklyn_safari = Zoo("Brooklyn Safari")
brooklyn_safari.add_animal("Giraffe")
brooklyn_safari.add_animal("Bear")
brooklyn_safari.add_animal("Baboon")
brooklyn_safari.add_animal("Wolf")
brooklyn_safari.add_animal("Cat")
brooklyn_safari.add_animal("Lion")
brooklyn_safari.get_animals()
brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()
brooklyn_safari.sort_animals()
brooklyn_safari.get_groups()
