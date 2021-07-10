-- DROP DATABASE IF EXISTS ToDO;
CREATE DATABASE ToDo ; 
USE ToDo;

CREATE TABLE Task(
    taskID  int NOT NULL auto_increment,
    title varchar(40) NOT NULL,
    description text,
    category varchar(40),
    finished boolean default FALSE,
    PRIMARY KEY (taskID)
	
); 

