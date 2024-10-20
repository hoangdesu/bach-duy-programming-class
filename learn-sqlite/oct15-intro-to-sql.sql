--Which asian country has the most population?
SELECT Name, Continent, Population FROM Country
WHERE Continent = 'Asia'
ORDER BY Population DESC
;


SELECT Name, Continent, LifeExpectancy, Population
FROM Country
WHERE Continent = 'Asia'
ORDER BY LifeExpectancy DESC
;


SELECT Name, Continent, Population
FROM Country
WHERE Population > 100000000
;

