DROP DATABASE IF EXISTS hamburger_db;
CREATE DATABASE hamburger_db;
USE hamburger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devour boolean DEFAULT false,
	PRIMARY KEY (id)
);
