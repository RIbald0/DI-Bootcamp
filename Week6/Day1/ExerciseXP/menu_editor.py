from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")

        input_user = input("Choose an option (V, A, D, U, S) or (Q) to quit: ").upper()
        print(input_user)

        if input_user == "V":
            requested_item = input("Enter the name of the item you want to view: ")
            item = MenuManager.get_by_name(requested_item)
            if item:
                print(f"Item: {item.name}, Price: ${item.price}")
            else:
                print("Item not found.")
        elif input_user == "A":
            add_item_to_menu()
        elif input_user == "D":
            remove_item_from_menu()
        elif input_user == "U":
            update_item_from_menu()
        elif input_user == "S":
            show_restaurant_menu()
        elif input_user == "Q":
            print("Exiting the menu. Goodbye!")
            break
        else:
            print("Invalid option. Please try again.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("Restaurant Menu:")
        for item in items:
            print(f"- {item.name}: ${item.price}")
    else:
        print("The menu is currently empty.")

def add_item_to_menu():
    name = input("Enter the name of the new item: ")
    price = int(input("Enter the price of the new item: "))
    new_item = MenuItem(name, price)
    new_item.save()
    print(f"{name} was added successfully to the menu.") 


def remove_item_from_menu():
    name = input("Enter the name of the item to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print(f"{name} was deleted successfully from the menu.")
    else:
        print("Item not found.")

def update_item_from_menu():
    name = input("Enter the name of the item to update: ")
    item = MenuManager.get_by_name(name)
    if item:
        new_name = input("Enter the new name for the item: ")
        new_price = int(input("Enter the new price for the item: "))
        item.update(new_name, new_price)
        print(f"{name} was updated successfully to {new_name} with price ${new_price}.")
    else:
        print("Item not found.")



show_user_menu()