SELECT CountryCode, CityName
FROM City
--WHERE CountryCode = 'AFG'
GROUP BY CountryCode
;


SELECT CountryCode, GROUP_CONCAT(CityName) AS Cities
FROM City
GROUP BY CountryCode;

-- get all countries, group by their cities
SELECT Country.CountryName, GROUP_CONCAT(City.CityName) AS Cities
FROM City JOIN Country 
ON City.CountryCode = Country.CountryCode
GROUP BY City.CountryCode;


SELECT DISTINCT Year FROM YearlyPopulation
WHERE Year = 1960 AND CountryCode = 'WLD';