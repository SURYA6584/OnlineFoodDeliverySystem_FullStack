package com.online.food.delivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.online.food.delivery.entity.Menu_Items;
import com.online.food.delivery.repository.Menu_Items_Repository;

@Service
public class MenuItemsServiceImpl implements MenuItemsService{
	@Autowired
	private Menu_Items_Repository menuItemsRepository;
	
	public List<Menu_Items> getAllMenu(){
		return menuItemsRepository.findAll();
	}
	
	public Menu_Items getMenuById(Integer id) {
		return menuItemsRepository.findById(id).get();
	}
	
	public String addMenu(Menu_Items menuItems) {
		menuItemsRepository.save(menuItems);
		return "Menu Added Sucessfully !!";
	}
	public String updateMenu(Menu_Items updateMenu) {
		Optional<Menu_Items> menuItemOptional = menuItemsRepository.findById(updateMenu.getMenu_item_id());
		if(menuItemOptional.isPresent()) {
			Menu_Items existingMenu = menuItemOptional.get();
			
			existingMenu.setAvailability(updateMenu.getAvailability());
			existingMenu.setDescription(updateMenu.getDescription());
			existingMenu.setItem_name(updateMenu.getItem_name());
			existingMenu.setPrice(updateMenu.getPrice());
			existingMenu.setRestaurants(updateMenu.getRestaurants());
			
			menuItemsRepository.save(existingMenu);
			
			return "menu Updated !!";
			
		}
		else {
			return "Invalid Menu Id !!";
		}
	}
	public String deleteMenu(Integer id) {
		Optional<Menu_Items> menuOptional = menuItemsRepository.findById(id);
		Menu_Items deleteMenu = menuOptional.get();
		if(deleteMenu!=null) {
			menuItemsRepository.delete(deleteMenu);
			
			return "Deleted Sucessfully !!";
		}
		else {
			return "Kindly Provide a Valid ID ";
		}
	}
}
