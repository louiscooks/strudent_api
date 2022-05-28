CREATE DATABASE IF NOT EXISTS customer;

USE customer;

DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
   firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    -- salt VARCHAR(255) NOT NULL,
    -- password VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    status ENUM('active','deleted') NOT NULL DEFAULT 'active',
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO students(firstName, lastName, email, company, city) VALUES
('john', 'doe', 'doe1@gmail.com', '1nhealth', 'Orlando'),
('Will', 'Smith', 'WillSmith@aol.com', 'google', 'Miami'),
('Chris', 'Rock', 'Rocky123@yahoo.com', 'amazon', 'Cooper City'),
('Taylor', 'Swift', 'Swiftly!@gmail.com', 'meta', 'Hialeah');
-- CREATE TABLE Grades (
--     id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
-- --    student_id ,
--   grade INT NOT NULL DEFAULT 0,
-- 	semester INT NOT NULL DEFAULT ,
--     -- salt VARCHAR(255) NOT NULL,
--     -- password VARCHAR(255) NOT NULL,
--     company VARCHAR(255) NOT NULL,
--     city VARCHAR(255) NOT NULL,
--     status ENUM('active','deleted') NOT NULL DEFAULT 'active',
--    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (`id`),
--   UNIQUE INDEX `email_UNIQUE` (`email` ASC)
-- );


-- use customer;
-- DROP TABLE IF EXISTS students;
-- CREATE TABLE students (
--     id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
--    firstName VARCHAR(255) NOT NULL,
--   lastName VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     -- salt VARCHAR(255) NOT NULL,
--     -- password VARCHAR(255) NOT NULL,
--     company VARCHAR(255) NOT NULL,
--     city VARCHAR(255) NOT NULL,
--     status ENUM('active','deleted') NOT NULL DEFAULT 'active',
--    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (`id`)
-- );


-- select * from students;
