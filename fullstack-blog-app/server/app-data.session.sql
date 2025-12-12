CREATE TABLE users (
    username TEXT PRIMARY KEY,
    password TEXT
);


SELECT * FROM users;


CREATE TABLE posts (
    id INTEGER PRIMARY KEY,
    username TEXT REFERENCES users(username),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now', 'localtime'))
);

DROP TABLE IF EXISTS posts;

SELECT * FROM posts
WHERE username = 'z';
