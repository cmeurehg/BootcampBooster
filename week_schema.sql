DROP DATABASE IF EXISTS bootcampBoosterDB;
CREATE DATABASE bootcampBoosterDB;
USE bootcampBoosterDB;

CREATE TABLE weeks (
    week INT (30) AUTO_INCREMENT NOT NULL,
    skills VARCHAR (100) NOT NULL,
    activities VARCHAR (100) NOT NULL,
    PRIMARY KEY week
);

INSERT INTO test_weeks (skills, activities) VALUES ('Bash/Terminal Commands, html, CSS, Relative Paths', 
'Bash/Terminal Commands cheatsheet, Intro to Console/Bash, my-first-html, Basic-HTML-Bio, 
quick-example-internal-css, html-bio-with-css, RelativePaths_WorkingExample, FloatExamples, Positioning, 
CSS-floats, CSS_PositionedLayout');
