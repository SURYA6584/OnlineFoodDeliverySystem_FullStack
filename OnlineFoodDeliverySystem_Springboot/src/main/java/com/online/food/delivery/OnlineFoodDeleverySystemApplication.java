package com.online.food.delivery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class OnlineFoodDeleverySystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineFoodDeleverySystemApplication.class, args);
	}

}
