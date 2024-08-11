package com.online.food.delivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.online.food.delivery.entity.Menu_Items;

@Repository
public interface Menu_Items_Repository extends JpaRepository<Menu_Items, Integer>{
	
}
