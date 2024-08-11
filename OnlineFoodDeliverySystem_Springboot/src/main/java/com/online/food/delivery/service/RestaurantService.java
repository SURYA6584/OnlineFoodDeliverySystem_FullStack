package com.online.food.delivery.service;

import java.util.List;

import com.online.food.delivery.entity.Restaurants;

public interface RestaurantService {
	public List<Restaurants> getAllRestaurants();
	public Restaurants getRestarauntById(Integer id);
	public String addRestaurant(Restaurants restaurant);
	public String updateRestaurant(Restaurants restaurantUpdate);
	public String deleteRestaurant(Integer id);


}
