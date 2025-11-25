SELECT AVG(energy) AS [Average energy]
FROM songs;


-- 6

--1: joining tables
SELECT songs.name, artists.name
FROM songs
LEFT JOIN artists ON artists.id = songs.artist_id
WHERE artists.name LIKE 'post malone';


--2: sub-queries: much better performance
SELECT name
FROM songs
WHERE artist_id = (
    SELECT id
    FROM artists
    WHERE name = 'Post Malone'
);


SELECT *
FROM artists
WHERE name = 'Post Malone';



-- 7
SELECT AVG(energy)
FROM songs
    WHERE artist_id = (
    SELECT id
    FROM artists
    WHERE name = 'Drake'
);


