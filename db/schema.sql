### Schema

CREATE DATABASE skill_db;
USE skill_db;

CREATE TABLE skills
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	reviewed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
