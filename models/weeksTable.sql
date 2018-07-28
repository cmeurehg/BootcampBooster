DROP DATABASE IF EXISTS bootcampBoosterDB;
CREATE DATABASE bootcampBoosterDB;
USE bootcampBoosterDB;

CREATE TABLE weeks (
    week INT (30) AUTO_INCREMENT NOT NULL,
    skills VARCHAR (250) NOT NULL,
    activities VARCHAR (250) NOT NULL,
    PRIMARY KEY week
);

INSERT INTO test_weeks (skills, activities) VALUES ('Bash/Terminal Commands, html, CSS, Relative Paths', 
'Bash/Terminal Commands cheatsheet, Intro to Console/Bash, my-first-html, Basic-HTML-Bio, 
quick-example-internal-css, html-bio-with-css, RelativePaths_WorkingExample, FloatExamples, Positioning, 
CSS-floats, CSS_PositionedLayout');

INSERT INTO test_weeks (skills, activities) VALUES ('Google Developer Tools, CSS, GitHub, Google Fonts,
Bootstrap, Media Queries', 
'Hack websites, Modify Own Websites, Multiple CSS, Reset CSS, GitHub Pages Personal, GitHub Pages Project, 
CSS Typography, Google Font demo, Pseudoclass, Wheres CSS, Bootstrap demo, Warmup Bootstrap, Instructor Grids, 
Text Layout, Instructor Layout, Card Layout, Panel Layout, Instructor Media, Student Media');

INSERT INTO test_weeks (skills, activities) VALUES ('JavaScript Basics, JS variables, JS Arrays, JS Coditional statement', 
'Code dissection, Basic Variables demo, Pizza Variables, Console Log Demo, Pizza Console, Prompt Demo, 
Prompt Sushi, Conditional Demo, Conditional Activity, Conditional Activity 2, Arrays Demo, Arrays Activity');



-- Collapse 
-- Message Input

-- Message project2team7