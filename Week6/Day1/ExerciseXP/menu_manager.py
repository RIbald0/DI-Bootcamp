from menu_item import MenuItem
import psycopg2

connection = psycopg2.connect(database = 'RestaurantMenuManager',
    user = 'postgres',
    password = '3thanatos3',
    host = 'localhost',
    port = '5432')


class MenuManager():
   
    @classmethod
    def get_by_name(cls, name):
        cursor = None
        connection = None
        try:
            connection = psycopg2.connect(database = 'RestaurantMenuManager',
                    user = 'postgres',
                    password = '3thanatos3',
                    host = 'localhost',
                    port = '5432')
            cursor = connection.cursor()
            query = 'SELECT * FROM Menu_items WHERE (item_name = %s)'
            values = (name,)
            cursor.execute(query, values)
            item = cursor.fetchone()
            if item:
                return MenuItem(item[1], item[2])       
            else:
                return None
        finally:
            if cursor is not None:
                cursor.close()
            if connection is not None:
               connection.close()

    @classmethod
    def all_items(cls):
        cursor = None
        connection = None
        try:
            connection = psycopg2.connect(database = 'RestaurantMenuManager',
                    user = 'postgres',
                    password = '3thanatos3',
                    host = 'localhost',
                    port = '5432')
            cursor = connection.cursor()
            query = 'SELECT * FROM Menu_items'
            cursor.execute(query)
            item = cursor.fetchall()
            items_list = []
            for i in item:
                items_list.append(MenuItem(i[1], i[2]))
            return items_list
        finally:
            if cursor is not None:
                cursor.close()
            if connection is not None:
                connection.close()

                        


      