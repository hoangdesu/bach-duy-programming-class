--Aggregation function: hàm gom data

SELECT SUM(Population) AS "World Population"
FROM Country;


SELECT SUM(Population) AS "Europian Population"
FROM Country
WHERE Continent = 'Europe';


SELECT AVG(LifeExpectancy) 
FROM Country
WHERE Continent = 'North America'
;


SELECT Count() AS IndepYearAfter1990Count
FROM Country
WHERE IndepYear >= 1990
;


SELECT Name AS "Đất nước", Continent AS "Lục địa" 
FROM Country;



