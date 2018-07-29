DROP DATABASE IF EXISTS bootcampBoosterDB;
CREATE DATABASE bootcampBoosterDB;
USE bootcampBoosterDB;

CREATE TABLE skills 
   ( id INT (30) AUTO_INCREMENT NOT NULL,
    skill VARCHAR (250) NOT NULL, 
    PRIMARY KEY (id)
    );
    

CREATE TABLE weeks 
    (id INT (30) AUTO_INCREMENT NOT NULL,
    activities VARCHAR (250) NOT NULL,
    PRIMARY KEY (id)
    );
