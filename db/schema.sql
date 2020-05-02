DROP DATABASE IF EXISTS hamburger_db;

CREATE DATABASE hamburger_db;
USE hamburger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    devour boolean default false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (name) VALUES ('Cheeseburger');
INSERT INTO burgers (name) VALUES ('BBQ Burger');
INSERT INTO burgers (name) VALUES ('Memphis Fire Style');
INSERT INTO burgers (name) VALUES ('Veggie Burger');
INSERT INTO burgers (name) VALUES ('Chili Burger');

UPDATE burgers SET devour = true WHERE id= 1;
UPDATE burgers SET devour = true WHERE id= 3;

SELECT * FROM burgers;

