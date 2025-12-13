#Daily challenge : SQL Puzzle
#Questions
#Q1. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

Output = 0 because any direct comparison with NULL result in UNKNOWN so the comparison is discarded

#Q2. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

Output = 2 because in this case we can do the comparison (no NULL here) and then look for how many entities there are where id is not 5

#Q3. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

Output = 0 because in this case we have to compare with both id 5 and NULL so everything is discarded
#Q4. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

Output = 2 in this case needs to compare with all the id of first tab that are not id 5