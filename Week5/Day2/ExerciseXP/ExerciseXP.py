#Exercise 1 : Items and customers

SELECT * FROM items ORDER BY price ASC
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;
SELECT last_name FROM customers ORDER BY last_name DESC

#Exercise 2: Dvdrental Database

SELECT * FROM customer;
SELECT CONCAT(first_name,' ',last_name) AS full_name FROM customer;
SELECT DISTINCT create_date FROM customer;
SELECT * FROM customer ORDER BY first_name DESC;
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;
SELECT address, phone FROM address WHERE district = 'Texas';
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;
SELECT film_id, title, description, release_year, rental_rate FROM film WHERE title = 'Gladiator';
SELECT film_id, title, description, release_year, rental_rate FROM film WHERE title LIKE 'Gl%';
SELECT title, replacement_cost FROM film ORDER BY replacement_cost ASC LIMIT 10;
SELECT title, replacement_cost FROM film ORDER BY replacement_cost ASC OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY; 
WITH NumberedFilms AS (SELECT title, replacement_cost, ROW_NUMBER() OVER (ORDER BY replacement_cost ASC) AS row_num FROM film) SELECT title, replacement_cost FROM NumberedFilms WHERE row_num BETWEEN 11 AND 20 
SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date FROM customer INNER JOIN payment ON customer.customer_id = payment.customer_id ORDER BY customer.customer_id ASC;
SELECT film.title, film.release_year FROM film LEFT JOIN inventory ON film.film_id = inventory.film_id WHERE inventory.film_id IS NULL;
SELECT city.city, country.country FROM city FULL JOIN country ON city.country_id = country.country_id;
SELECT customer.customer_id, CONCAT(customer.first_name,' ',customer.last_name) as full_name, payment.amount, payment.payment_date, payment.staff_id FROM customer INNER JOIN payment ON customer.customer_id = payment.customer_id ORDER BY payment.staff_id;