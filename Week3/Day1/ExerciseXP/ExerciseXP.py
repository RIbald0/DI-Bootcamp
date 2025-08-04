#Exercise 1: Pets
#Use the provided Pets and Cat classes to create a Siamese breed, instantiate cat objects, and use the Pets class to manage them.
#See the example below, before diving in.
#Step 1: Create the Siamese Class
#Create a class called Siamese that inherits from the Cat class.
#You can add any specific attributes or methods for the Siamese breed, or leave it as is if there are no unique behaviors.
#Step 2: Create a List of Cat Instances
#Create a list called all_cats that contains instances of Bengal, Chartreux, and Siamese cats.
#Example: all_cats = [bengal_obj, chartreux_obj, siamese_obj]
#Give each cat a name and age.
#Step 3: Create a Pets Instance
#Create an instance of the Pets class called sara_pets, passing the all_cats list as an argument.
#Step 4: Take Cats for a Walk
#Call the walk() method on the sara_pets instance.
#This should print the result of calling the walk() method on each cat in the list.
#Step 1: Create the Siamese class
#Step 2: Create a list of cat instances
#Step 3: Create a Pets instance of the list of cat instances
#sara_pets = Pets(all_cats)
#Step 4: Take cats for a walk
#sara_pets.walk()


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    

cat1 = Bengal('Salsiccia', 10)
cat2 = Chartreux('Tofu', 3)
cat3 = Siamese('Pepe', 8)

all_cats = [cat1, cat2, cat3]
sarah_class = Pets(all_cats)
sarah_class.walk()


#Exercise 2: Dogs
#Goal: Create a Dog class with methods for barking, running speed, and fighting.
#Step 1: Create the Dog Class
#Create a class called Dog with name, age, and weight attributes.
#Implement a bark() method that returns “ is barking”.
#Implement a run_speed() method that returns weight / age * 10.
#Implement a fight(other_dog) method that returns a string indicating which dog won the fight, based on run_speed * weight.
#Step 2: Create Dog Instances
#Create three instances of the Dog class with different names, ages, and weights.
#Step 3: Test Dog Methods
#Call the bark(), run_speed(), and fight() methods on the dog instances to test their functionality.


class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight   

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        dog1power = self.run_speed() * self.weight
        dog2power = other_dog.run_speed() * other_dog.weight
        if dog1power > dog2power:
            return f'{self.name} won the fight'
        elif dog1power < dog2power:
            return f'{other_dog.name} won the fight'
        else:
            return f"Nobody won the fight. It's a draw."

        
        # ... code to determine and return winner ...

# Step 2: Create dog instances
dog1 = Dog('Tea', 15, 7)
dog2 = Dog('Rex', 5, 40)

# Step 3: Test dog methods
print(dog1.bark())
print(dog2.bark())
print(dog2.run_speed())
print(dog1.run_speed())
print(dog1.fight(dog2))


#Exercise 4: Family and Person Classes
#Goal:Practice working with classes and object interactions by modeling a family and its members.
#Step 1: Create the Person Class
#Define a Person class with the following attributes:
#first_name
#age
#last_name (string, should be initialized as an empty string)
#Add a method called is_18():
#It should return True if the person is 18 or older, otherwise False.
#Step 2: Create the Family Class
#Define a Family class with:
#A last_name attribute
#A members list that will store Person objects (should be initialized as an empty list)
#Add a method called born(first_name, age):
#It should create a new Person object with the given first name and age.
#It should assign the family’s last name to the person.
#It should add this new person to the members list.
#Add a method called check_majority(first_name):
#It should search the members list for a person with that first_name.
#If the person exists, call their is_18() method.
#If the person is over 18, print:
#"You are over 18, your parents Jane and John accept that you will go out with your friends"
#Otherwise, print:
#"Sorry, you are not allowed to go out with your friends."
#Add a method called family_presentation():
#It should print the family’s last name.
#Then, it should print each family member’s first name and age.
#Expected Behavior:
#Once implemented, your program should allow you to:
#Create a family with a last name.
#Add members to the family using the born() method.
#Use check_majority() to see if someone is allowed to go out.
#Display family information with family_presentation().
#Don’t forget to test your classes by creating an instance of Family, adding members, and calling each method to see the expected output.


class Person:
    def __init__(self, first_name, age, last_name=''):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name

    def is_18(self):
        if self.age >= 18:
            return True
        else:
            return False
        

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age, self.last_name)
        self.members.append(new_person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Monica and Roy accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No family member named {first_name} found.")


    def family_presentation(self):
         print(f"Family last name: {self.last_name}")
         for member in self.members:
            print(f"{member.first_name}, age {member.age}")

            



person1 = Person('Matteo', 36, 'Balducci')
print(person1.is_18())
my_family = Family('Balducci')
my_family.born('Gal', 35)
my_family.born('Alice', 8)
my_family.check_majority('Alice')
my_family.check_majority('Gal')
my_family.check_majority('Bob')
my_family.family_presentation()


