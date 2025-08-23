#Exercise 1: DVD Rental

SELECT film.title, film.description, language.name FROM film INNER JOIN language ON film.language_id = language.language_id
SELECT film.title, film.description, language.name FROM language LEFT JOIN film ON language.language_id = film.language_id 
CREATE TABLE new_film(
id SERIAL PRIMARY KEY,
name VARCHAR (100) NOT NULL
);
INSERT INTO new_film(id, name)
VALUES
      (1,'Alien'),
	  (2,'Silent Hill'),
	  (3,'Sinister')
CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY NOT NULL,
film_id INTEGER NOT NULL REFERENCES new_film (id) ON DELETE CASCADE,
language_id INTEGER NOT NULL REFERENCES language (language_id),
title VARCHAR (100) NOT NULL,
score INTEGER NOT NULL,
review_text TEXT,
last_update DATE
);
INSERT into customer_review(review_id, film_id, language_id, title, score, review_text, last_update)
VALUES
      (1,1,1,'Claustrophobic Terror Among the Stars',10,'Alien is a maste rclass in slow-burn sci-fi horror, blending claustrophobic tension with groundbreaking creature design to create one of cinema’s most terrifying experiences.','2025-08-22')
      (2,2,1,'A Beautiful Nightmare',8,'A visually haunting adaptation that nails atmosphere and imagery, but falters in coherence and storytelling.','2025-08-20'),
	  (3,3,1,'Terror in the Shadows',9,'A chilling blend of found footage and supernatural dread, delivering one of the most unsettling modern horror experiences.','2025-08-18')
DELETE FROM new_film WHERE id=1
#The record gets deleted also on customer_review table because it's referenced and because it' ON DELETE CASCADE


# Exercise 2 : DVD Rental

UPDATE film SET language_id=2 WHERE film_id = 384 or film_id = 8
THE customer table has address_id and store_id as FOREIGN KEYS and this affect INSERT because for instance you cannot create a new customer by making up an address_id. The address_id you use must already exist in the address table.
DROP TABLE customer_review; Easy because no other tables depend on it
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;
SELECT rental.return_date, inventory.film_id, film.title, film.rental_rate FROM rental INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id INNER JOIN film ON film.film_id = inventory.film_id WHERE rental.return_date is NULL ORDER BY rental_rate DESC LIMIT 30
SELECT film.title,film.description, actor.first_name, actor.last_name FROM actor INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id INNER JOIN film ON film.film_id = film_actor.film_id WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND film.description ILIKE '%sumo%'
SELECT category.name, film.title, film.length, film.rating FROM category INNER JOIN film_category ON category.category_id = film_category.category_id INNER JOIN film ON film_category.film_id = film.film_id WHERE film.rating = 'R' AND film.length < 60 AND category.name = 'Documentary'
SELECT customer.first_name, customer.last_name, payment.amount, rental.return_date, film.title FROM customer INNER JOIN payment ON customer.customer_id = payment.customer_id INNER JOIN rental ON payment.rental_id = rental.rental_id INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id INNER JOIN film ON inventory.film_id = film.film_id WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND payment.amount > 4 AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'
SELECT customer.first_name, customer.last_name, film.title, film.description, film.replacement_cost FROM customer INNER JOIN payment ON customer.customer_id = payment.customer_id INNER JOIN rental ON payment.rental_id = rental.rental_id INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id INNER JOIN film ON inventory.film_id = film.film_id WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND (film.title ILIKE '%boat%'OR film.description ILIKE '%boat%') ORDER BY replacement_cost DESC LIMIT 1