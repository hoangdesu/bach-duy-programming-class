--SELECT [FieldNames],
--FROM [Table];

SELECT * FROM City;


/*SELECT citycode, COUNTRYCODE, cItYnAmE  
FROM City;*/


SELECT CityCode AS CityID, CountryCode AS CountryID, CityName
FROM City;


SELECT SUM(Population) AS WorldPopulation
FROM Country
;


SELECT Name, MAX(GNP)
FROM Country
;


SELECT Name, MIN(GNP)
FROM Country
;


SELECT AVG(LifeExpectancy)
FROM Country
;


SELECT COUNT(*) AS AfricaCountries --Name, Continent
FROM Country
WHERE Continent = 'Africa'
;


