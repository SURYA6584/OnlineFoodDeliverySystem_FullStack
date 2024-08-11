package com.online.food.delivery.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.online.food.delivery.entity.Restaurants;
import com.online.food.delivery.repository.RestaurantRepository;

@Service
public class RestaurantServiceImpl implements RestaurantService{
	@Autowired
	private RestaurantRepository restaurantRepository;
	
	public List<Restaurants> getAllRestaurants(){
		return restaurantRepository.findAll();
	}
	
	public Restaurants getRestarauntById(Integer id) {
		return restaurantRepository.findById(id).get();
	}
	
	public String addRestaurant(Restaurants restaurant) {
		restaurantRepository.save(restaurant);
		return "Restaurant Added Successfully";
	}
	
	
	public String updateRestaurant(Restaurants restaurantUpdate) {
		Optional<Restaurants> RestaurantOptional = restaurantRepository.findById(restaurantUpdate.getRestaurant_id());
		if(RestaurantOptional.isPresent()) {
			Restaurants restaurantExisting = RestaurantOptional.get();
			restaurantExisting.setCuisine_type(restaurantUpdate.getCuisine_type());
			restaurantExisting.setLocation(restaurantUpdate.getLocation());
			restaurantExisting.setPhone(restaurantUpdate.getPhone());
			restaurantExisting.setRestaurant_name(restaurantUpdate.getRestaurant_name());
			
			restaurantRepository.save(restaurantExisting);
			
			return "Updated Sucessfully !!";
		}
		else {
			return "Provide a Valid Restaurent ID";
		}
	}
	
	public String deleteRestaurant(Integer id) {
		restaurantRepository.deleteById(id);
		return "Restaurant Deleted Sucessfully !!";
	}
}
