#Daily challenge : Web API to DB

import requests
import psycopg2
import random

connection = psycopg2.connect(database = 'countries_2',
    user = 'postgres',
    password = '3thanatos3',
    host = 'localhost',
    port = '5432')

cursor = connection.cursor()

cursor.execute('DROP TABLE IF EXISTS countries')
cursor.execute('''CREATE TABLE countries(
               country_id SERIAL PRIMARY KEY,
               country_name VARCHAR (200) NOT NULL,
               capital VARCHAR (200),
               flag_png VARCHAR(200),
               subregion VARCHAR (200),
               population INTEGER NOT NULL)''')

connection.commit()

print('connection successfully made. Table was created')

response = requests.get('https://www.apicountries.com/countries')
data = response.json()

for i in random.sample(data, 10):
    try:
        country_name = i['name']
    except:
        country_name = 'Unknown'
    if '\'' in country_name:
        country_name = country_name.replace('\'', '`')
    try:
        capital = i['capital']
    except:
        capital = 'Unknown'
    if '\'' in capital:
        capital = capital.replace('\'', '`')
    flag_png = i['flags']['png']
    subregion = i['subregion']
    population = i['population']
    cursor.execute(f'''INSERT INTO countries (country_name, capital, flag_png, subregion, population)
                   VALUES ('{country_name}', '{capital}', '{flag_png}', '{subregion}', '{population}')''')
    
connection.commit()

print('table successfully populated')
cursor.execute("SELECT * FROM countries")

rows = cursor.fetchall()
for row in rows:
    print(row)

cursor.close()
connection.close()
