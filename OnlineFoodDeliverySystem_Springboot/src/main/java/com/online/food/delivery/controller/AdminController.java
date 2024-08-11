package com.online.food.delivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.food.delivery.Responses.LoginResponse;
import com.online.food.delivery.entity.Admin;
import com.online.food.delivery.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/adminlogin")
	public ResponseEntity<?> loginCustomer(@RequestBody Admin login){
		LoginResponse loginResponse= adminService.loginAdmin(login);
		return ResponseEntity.ok(loginResponse);
	}
}
