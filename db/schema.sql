DROP DATABASE IF EXISTS musicvids_db;

CREATE DATABASE musicvids_db;

USE musicvids_db;

CREATE TABLE songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artist_name VARCHAR(100) NOT NULL,
    song_name VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (9) NOT NULL
);

CREATE TABLE videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    video_link VARCHAR(250) NOT NULL,
	song_id INT,
    FOREIGN KEY(song_id) 
    REFERENCES songs (id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment_text TEXT,
    song_id INT,
    FOREIGN KEY(song_id) 
    REFERENCES songs (id)
);