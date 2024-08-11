package com.online.food.delivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.online.food.delivery.entity.Orders;

public interface OrdersRepository extends JpaRepository<Orders, String>{
	
}
