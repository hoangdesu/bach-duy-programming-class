CREATE TABLE champions (
    id    INTEGER,    -- PRIMARY KEY, (auto-increment)
    name  TEXT,
    roles TEXT DEFAULT('mid'),
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS champions;



INSERT INTO champions
VALUES (5, 'Zed', 'mid,jungle');


INSERT INTO champions(name, roles)
VALUES ('Ahri', 'mid,support');


INSERT INTO champions(name)
VALUES ('LeBlanc');


INSERT INTO champions(name, roles)
VALUES 
    ('Lee Sin', 'jungle'),
    ('Zoe', 'mid'),
    ('Xerath', 'mid,support'),
    ("Cho'Gath", 'mid,support');



/*
roles: "mid,jg"
TABLE role (
    champ_id int ref champions(id)
    role: text
);

roles:
    1 mid
    1 jungle
    1 top
    1 support


JSON String
roles (TEXT): '[\"mid\",\"jg\"]'
**/



CREATE TABLE users (
    id BLOB PRIMARY KEY DEFAULT (lower(
            hex(randomblob(4)) || '-' ||
            hex(randomblob(2)) || '-' ||
            '4' || substr(hex(randomblob(2)), 2) || '-' ||
            substr('89ab', abs(random()) % 4 + 1, 1) ||
            substr(hex(randomblob(2)), 2) || '-' ||
            hex(randomblob(6))
        )),
--    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id BLOB PRIMARY KEY DEFAULT (randomblob(16)),
    name TEXT
);

-- AUTOINCREMENT will not re-use old ids

INSERT INTO users(name) 
VALUES ('a'), ('b');


INSERT INTO users(name) 
VALUES ('c'), ('d');


SELECT
    lower(
        hex(id)
        -- format like UUID
    )
FROM users;


owned_champs: joined table
    user_id    champ_id
    1            2
    1            3
    2            5
    2            7
    


