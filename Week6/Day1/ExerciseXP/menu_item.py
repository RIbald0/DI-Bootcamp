import psycopg2


connection = psycopg2.connect(database = 'RestaurantMenuManager',
    user = 'postgres',
    password = '3thanatos3',
    host = 'localhost',
    port = '5432')

cursor = connection.cursor()


class MenuItem():
    def __init__(self, name, price):
        self.name = name
        self.price = price


    def save(self):
        cursor = None
        connection = None
        try:
            connection = psycopg2.connect(database = 'RestaurantMenuManager',
                user = 'postgres',
                password = '3thanatos3',
                host = 'localhost',
                port = '5432')
            cursor = connection.cursor()
            query = 'INSERT INTO Menu_items(item_name, item_price) VALUES (%s, %s)'
            values = (self.name, self.price)
            cursor.execute(query, values)
            connection.commit()
        finally:
            if cursor is not None:
                cursor.close()
            if connection is not None:
                connection.close()

    def delete(self):
        cursor = None
        connection = None
        try:
            connection = psycopg2.connect(database = 'RestaurantMenuManager',
                user = 'postgres',
                password = '3thanatos3',
                host = 'localhost',
                port = '5432')
            cursor = connection.cursor()
            query = 'DELETE FROM Menu_items WHERE (item_name = %s)'
            values = (self.name,)
            cursor.execute(query, values)
            connection.commit()
        finally:
            if cursor is not None:
                cursor.close()
            if connection is not None:
                connection.close()

    
    def update(self,name, price):
        original_name = self.name
        original_price = self.price
        cursor = None
        connection = None
        try:
            connection = psycopg2.connect(database = 'RestaurantMenuManager',
                user = 'postgres',
                password = '3thanatos3',
                host = 'localhost',
                port = '5432')
            cursor = connection.cursor()
            query = 'UPDATE Menu_items SET item_name = %s, item_price = %s WHERE (item_name = %s) and (item_price = %s)'
            values = (name, price, original_name, original_price)
            cursor.execute(query, values)
            connection.commit()
        finally:
            if cursor is not None:
                cursor.close()
            if connection is not None:
                connection.close()
        
