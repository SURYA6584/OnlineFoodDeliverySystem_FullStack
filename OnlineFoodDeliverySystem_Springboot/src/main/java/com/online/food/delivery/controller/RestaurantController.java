package com.online.food.delivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.food.delivery.entity.Restaurants;
import com.online.food.delivery.service.RestaurantService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class RestaurantController {
	
	@Autowired
	private RestaurantService restaurantService;
	
	@GetMapping("/getAllRestaurant")
	public List<Restaurants> getAllRestaurants(){
		return restaurantService.getAllRestaurants();
	}
	
	@GetMapping("/getRestarauntById/{id}")
	public Restaurants getRestarauntById(@PathVariable ("id") Integer id) {
		return restaurantService.getRestarauntById(id);
	}
	
	@PostMapping("/addrestaurant")
	public void addRestaurant(@RequestBody Restaurants restaurant) {
		restaurantService.addRestaurant(restaurant);

	}
	@PostMapping("/updaterestaurant")
	public void updateRestaurant(@RequestBody Restaurants restaurantUpdate) {
		restaurantService.updateRestaurant(restaurantUpdate);
	}
	@DeleteMapping("/deleterestaurant/{id}")
	public void deleteRestaurant(@PathVariable ("id") Integer id) {
		restaurantService.deleteRestaurant(id);
		
	}
}