SELECT COUNT(*) FROM actors

IN THE BELOW WAY YOU ARE ABLE TO INSERT THE NEW ENTRY BUT YOU HAVE AN EMPTY FIELD ON THE TABLE

INSERT INTO actors(first_name, last_name, birthdate, number_oscars)
VALUES('Mikey','','1999/03/25',1);

IF YOU DO LIKE BELOW YOU GET AN ERROR 'INSERT has more target columns than expressions'

INSERT INTO actors(first_name, last_name, birthdate, number_oscars)
VALUES('Mikey','1999/03/25',1);