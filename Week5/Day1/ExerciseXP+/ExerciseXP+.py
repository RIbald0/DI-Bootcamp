Database: bootcamp

DROP DATABASE IF EXISTS bootcamp;

CREATE TABLE students(
id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL,
birthdate DATE NOT NULL
)

INSERT INTO students(id, first_name, last_name, birthdate)
VALUES
      ('1', 'Marc','Benichou', '02/11/1998'),
	  ('2', 'Yoan','Cohen', '03/12/2010'),
	  ('3', 'Lea','Benichou', '27/07/1987'),
	  ('4', 'Amelia','Dux', '07/04/1996'),
	  ('5', 'David','Grez', '106/2003'),
	  ('6', 'Omer','Simpson', '03/14/0/1980'),
	  ('7', 'Matteo', 'Balducci', '04/11/1988');

SELECT * FROM students;
SELECT first_name, last_name FROM students WHERE id=2;
SELECT first_name, last_name FROM students WHERE first_name = 'Marc' and last_name = 'Benichou';
SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';
SELECT first_name, last_name FROM students WHERE id=1 OR id=3;
SELECT * FROM students WHERE birthdate >= '1/01/2000';