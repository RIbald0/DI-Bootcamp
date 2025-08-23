#Daily challenge: Tables Relationships
#PART 1

CREATE TABLE customer(
id SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50) NOT NULL
);

CREATE table customer_profile(
id SERIAL PRIMARY KEY, 
isLoggedIn BOOLEAN DEFAULT false,
customer_id INTEGER UNIQUE,
CONSTRAINT fk_customer_profile_customer FOREIGN KEY(customer_id) REFERENCES customer(id)
);

SELECT * FROM customer;
SELECT * FROM customer_profile

INSERT INTO customer(id, first_name, last_name)
VALUES
      (1,'John','Doe'),
	  (2,'Jerome','Lalu'),
	  (3,'Lea','Rive');

INSERT into customer_profile(isLoggedIN, customer_id)
VALUES
      (TRUE, (SELECT id from customer WHERE first_name = 'John')),
	  (FALSE, (SELECT id from customer WHERE first_name = 'Jerome'))

SELECT customer.first_name, customer_profile.isLoggedIn FROM customer INNER JOIN customer_profile ON customer.id = customer_profile.customer_id WHERE isLoggedIn = True 
SELECT customer.first_name, customer_profile.isLoggedIn FROM customer LEFT JOIN customer_profile ON customer.id = customer_profile.customer_id
SELECT count(*) FROM customer LEFT JOIN customer_profile ON customer.id = customer_profile.customer_id WHERE customer_profile.isLoggedIn = FALSE OR customer_profile.isLoggedIn IS NULL

#PART 2


CREATE TABLE book(
book_id SERIAL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
author VARCHAR(50) NOT NULL
)

INSERT INTO book(title, author)
VALUES
   ('Alice In Wonderland','Lewis Carroll'),
	  ('Harry Potter','J.K Rowling'),
	  ('To kill a mockingbird','Harper Lee')

CREATE TABLE student(
student_id SERIAL PRIMARY KEY,
name VARCHAR (50) NOT NULL UNIQUE,
age INTEGER,
CONSTRAINT check_student_age CHECK (age <= 15)
)

INSERT into student(name, age)
VALUES
   ('John', 12),
	  ('Lera', 11),
	  ('Patrick', 10),
	  ('Bob', 14);

CREATE TABLE library(
book_fk_id INTEGER,
student_fk_id INTEGER,
borrowed_date DATE,
PRIMARY KEY (book_fk_id, student_fk_id),
CONSTRAINT fk_library_book FOREIGN KEY(book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_library_student FOREIGN KEY(student_fk_id) REFERENCES student(student_id)ON DELETE CASCADE ON UPDATE CASCADE
)

INSERT INTO library(book_fk_id, student_fk_id, borrowed_date)
VALUES
   ((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),(SELECT student_ID FROM student WHERE name = 'John'), '2022/02/15'),
   ((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),(SELECT student_ID FROM student WHERE name = 'Bob'), '2021/03/03'),
   ((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),(SELECT student_ID FROM student WHERE name = 'Lera'), '2021/05/23'),
   ((SELECT book_id FROM book WHERE title = 'Harry Potter'),(SELECT student_ID FROM student WHERE name = 'Bob'), '2021/08/12');


SELECT * FROM library
SELECT student.name, book.title FROM library INNER JOIN book ON library.book_fk_id = book.book_id INNER JOIN student ON library.student_fk_id = student.student_id
SELECT avg(student.age) FROM library INNER JOIN book ON library.book_fk_id = book.book_id INNER JOIN student ON library.student_fk_id = student.student_id WHERE book.title = 'Alice In Wonderland'
DELETE FROM student WHERE name = 'John'
#It will delete also form library table due to the ON DELETE CASCADE definition