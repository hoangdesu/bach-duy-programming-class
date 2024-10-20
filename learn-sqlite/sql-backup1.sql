SELECT CountryName 
FROM Country;


SELECT
    Year,
    SUM(PopulationNumb) AS TotalPopulation
FROM
    YearlyPopulation
WHERE Year = 2000 OR Year = 1975
GROUP BY
Year
;


SELECT City.CityName, Country.CountryCode, Country.CountryName
FROM City
JOIN Country ON City.CountryCode = Country.CountryCode
WHERE Country.CountryName = 'Vietnam'
;


SELECT CityTemp.Year, CityTemp.AvgTemp, CityTemp.CityCode, Country.CountryName, City.CityName
FROM CityTemp
JOIN City ON CityTemp.CityCode = City.CityCode
JOIN Country ON City.CountryCode = Country.CountryCode
WHERE Country.CountryName = 'Vietnam'
--GROUP BY City.CityName
;



SELECT City.CityCode, CityTemp.Year, CityTemp.AvgTemp, Country.CountryName, City.CityName
FROM Country 
JOIN City ON Country.CountryCode = City.CountryCode
JOIN CityTemp ON City.CityCode = CityTemp.CityCode 
WHERE Country.CountryCode = 'VNM' 
AND CityTemp.Year = 1975
;

SELECT CityTemp.Year, CityTemp.AvgTemp, City.CityName
FROM Country 
JOIN City ON Country.CountryCode = City.CountryCode
JOIN CityTemp ON City.CityCode = CityTemp.CityCode 
WHERE Country.CountryCode = 'VNM' 
AND CityTemp.Year = 2000
;


SELECT City.CityName,
        AVG(CASE WHEN Year = 1975 THEN CityTemp.AvgTemp ELSE NULL END) AS Y1975Temp,
        AVG(CASE WHEN Year = 2000 THEN CityTemp.AvgTemp ELSE NULL END) AS Y2000Temp
FROM Country JOIN City ON Country.CountryCode = City.CountryCode
             JOIN CityTemp ON City.CityCode = CityTemp.CityCode 
WHERE Country.CountryCode = 'VNM' 
AND CityTemp.Year IN (1975, 2000)
GROUP BY City.CityCode
;


SELECT ?,
        AVG(CASE WHEN Year = 1975 THEN CityTemp.AvgTemp ELSE NULL END) AS Y1975Temp,
        AVG(CASE WHEN Year = 2000 THEN CityTemp.AvgTemp ELSE NULL END) AS Y2000Temp
FROM Country JOIN City ON Country.CountryCode = City.CountryCode
             JOIN CityTemp ON City.CityCode = CityTemp.CityCode 
WHERE Country.CountryCode = 'VNM' 
AND CityTemp.Year IN (1975, 2000)
GROUP BY City.CityCode
;




SELECT City.CityName, 
        StartYearTemp,
        EndYearTemp,
        (EndYearTemp - StartYearTemp) AS TempDifference
FROM Country 
JOIN City ON Country.CountryCode = City.CountryCode
JOIN CityTemp ON City.CityCode = CityTemp.CityCode 
JOIN (
    SELECT City.CityCode, 
           AVG(CASE WHEN Year = 1975 THEN CityTemp.AvgTemp ELSE NULL END) AS StartYearTemp,
           AVG(CASE WHEN Year = 2000 THEN CityTemp.AvgTemp ELSE NULL END) AS EndYearTemp
    FROM Country 
    JOIN City ON Country.CountryCode = City.CountryCode
    JOIN CityTemp ON City.CityCode = CityTemp.CityCode 
    WHERE Country.CountryCode = 'VNM' 
    AND CityTemp.Year IN (1975, 2000)
    GROUP BY City.CityCode
) AS TempTable ON City.CityCode = TempTable.CityCode
WHERE Country.CountryCode = 'VNM' 
AND CityTemp.Year IN (1975)
ORDER BY TempDifference DESC
;


SELECT State.StateName, 
        StartYearTemp,
        EndYearTemp,
        (EndYearTemp - StartYearTemp) AS TempDifference
FROM Country 
JOIN State ON Country.CountryCode = State.CountryCode
JOIN StateTemp ON State.StateCode = StateTemp.StateCode 
JOIN (
    SELECT State.StateCode, 
           AVG(CASE WHEN Year = 1975 THEN StateTemp.AvgTemp ELSE NULL END) AS StartYearTemp,
           AVG(CASE WHEN Year = 2000 THEN StateTemp.AvgTemp ELSE NULL END) AS EndYearTemp
    FROM Country 
    JOIN State ON Country.CountryCode = State.CountryCode
    JOIN StateTemp ON State.StateCode = StateTemp.StateCode 
    WHERE Country.CountryName = 'Australia' 
    AND StateTemp.Year IN (1975, 2000)
    GROUP BY State.StateCode
) AS TempTable ON State.StateCode = TempTable.StateCode
WHERE Country.CountryName = 'Australia' 
AND StateTemp.Year IN (1975)
ORDER BY TempDifference DESC
;


SELECT State.StateName,
StartYearTemp,
EndYearTemp,
(EndYearTemp - StartYearTemp) AS TempDifference
FROM Country
JOIN State ON Country.CountryCode = State.CountryCode
JOIN StateTemp ON State.StateCode = StateTemp.StateCode
JOIN (
    SELECT State.StateCode,
        AVG(CASE WHEN Year = 1975 THEN StateTemp.AvgTemp ELSE NULL END) AS StartYearTemp,
        AVG(CASE WHEN Year = 2000 THEN StateTemp.AvgTemp ELSE NULL END) AS EndYearTemp
    FROM Country
    JOIN State ON Country.CountryCode = State.CountryCode
    JOIN StateTemp ON State.StateCode = StateTemp.StateCode
    WHERE Country.CountryName = 'Australia' 
    AND StateTemp.Year IN (1975, 2000)
    GROUP BY State.StateCode
) AS TempTable ON State.StateCode = TempTable.StateCode
WHERE Country.CountryName = 'Australia' 
AND StateTemp.Year IN (1975)
ORDER BY TempDifference DESC
;


SELECT State.StateName,
StartYearTemp,
EndYearTemp,
(EndYearTemp - StartYearTemp) AS TempDifference
FROM Country
JOIN State ON Country.CountryCode = State.CountryCode
JOIN StateTemp ON State.StateCode = StateTemp.StateCode
JOIN (
    SELECT State.StateCode,
        AVG(CASE WHEN Year = 1996 THEN StateTemp.MinTemp ELSE NULL END) AS StartYearTemp,
        AVG(CASE WHEN Year = 2000 THEN StateTemp.MinTemp ELSE NULL END) AS EndYearTemp
    FROM Country
    JOIN State ON Country.CountryCode = State.CountryCode
    JOIN StateTemp ON State.StateCode = StateTemp.StateCode
    WHERE Country.CountryName = 'United States'
    AND StateTemp.Year IN (1996, 2000)
    GROUP BY State.StateCode
) AS TempTable ON State.StateCode = TempTable.StateCode
WHERE Country.CountryName = 'United States'
AND StateTemp.Year IN (1996)
ORDER BY TempDifference DESC
;

SELECT State.StateName,
StartYearTemp,
EndYearTemp,
(EndYearTemp - StartYearTemp) AS TempDifference
FROM Country
JOIN State ON Country.CountryCode = State.CountryCode
JOIN StateTemp ON State.StateCode = StateTemp.StateCode
JOIN (
    SELECT State.StateCode,
        AVG(CASE WHEN Year = 2000 THEN StateTemp.MinTemp ELSE NULL END) AS StartYearTemp,
        AVG(CASE WHEN Year = 2012 THEN StateTemp.MinTemp ELSE NULL END) AS EndYearTemp
    FROM Country
    JOIN State ON Country.CountryCode = State.CountryCode
    JOIN StateTemp ON State.StateCode = StateTemp.StateCode
    WHERE Country.CountryName = 'Australia'
    AND StateTemp.Year IN (2000, 2012)
    GROUP BY State.StateCode
) AS TempTable ON State.StateCode = TempTable.StateCode
WHERE Country.CountryName = 'Australia'
AND StateTemp.Year IN (2000)
ORDER BY TempDifference DESC
;

