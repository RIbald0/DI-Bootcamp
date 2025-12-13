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