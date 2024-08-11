package com.online.food.delivery.service;

import java.util.List;

import com.online.food.delivery.Responses.LoginResponse;
import com.online.food.delivery.entity.Customers;

public interface CustomerService {
	public List<Customers> getAllCustomerDetails();
	public Customers getAllCustomerDetailsById(String customer_id);
	public String updateCustomerDetail(Customers customerUpdated );
	public String addCustomer(Customers customer);
	public String deleteCustomer(String id);
	public LoginResponse loginCustomer(Customers login);
	

}
