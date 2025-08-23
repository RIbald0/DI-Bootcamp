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