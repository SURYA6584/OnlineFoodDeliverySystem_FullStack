package com.online.food.delivery.service;

import java.util.List;

import com.online.food.delivery.Responses.LoginResponse;
import com.online.food.delivery.entity.Admin;


public interface AdminService {
		
		
		public String addAdmin(Admin customer);
	
		public LoginResponse loginAdmin(Admin login);
		

	
}

