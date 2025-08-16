#Part 1 : Quizz
#Answer the following questions
#What is a class?
#A blueprint or template for creating objects. It defines a set of common attributes (data) and methods (behaviors).
#What is an instance?
#A specific object created from a class. If a class is the blueprint for a car, an instance is one actual car built from that blueprint.
#What is encapsulation?
#The bundling of data and the methods that operate on that data into a single unit (a class), hiding the internal details from the outside world.
#What is abstraction?
#Hiding complex implementation details and showing only the essential features. It allows you to use an object without needing to know how it works internally.
#What is inheritance?
#A mechanism where a new class (child class) acquires the attributes and methods of an existing class (parent class), promoting code reuse.
#What is multiple inheritance?
#A feature where a class can inherit from more than one parent class, combining functionalities from all of them.
#What is polymorphism?
#The ability of an object or method to take on many forms. It allows different classes to be treated through a common interface, each implementing the behavior in its own way.
#What is method resolution order or MRO?
#The specific order in which a programming language searches through a class's hierarchy of parent classes to find which method to execute. This is crucial for resolving conflicts in multiple inheritance.

#Part 2: Create a deck of cards class.
#The Deck of cards class should NOT inherit from a Card class.
#The requirements are as follows:
#The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
#The Deck class :
#should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.


import random

class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.main_deck = []
        for suit in suits:
            for value in values:
                new_card = Card(suit, value)
                self.main_deck.append(new_card)

    def shuffle(self):
        random.shuffle(self.main_deck)

    def deal(self):
        return self.main_deck.pop()
    
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"


my_deck = Deck()
my_deck.shuffle()
card1 = my_deck.deal()
card2 = my_deck.deal()
print("Card 1:", card1)
print("Card 2:", card2)
print(f"Cards remaining in deck: {len(my_deck.main_deck)}")


        
        

        

