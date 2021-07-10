package com.yb.toDoApp;

import java.sql.SQLException;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoApplication {

	public static void main(String[] args) throws SQLException 
	{
		SpringApplication.run(TodoApplication.class, args);
	

	}

}
