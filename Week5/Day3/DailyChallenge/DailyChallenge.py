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