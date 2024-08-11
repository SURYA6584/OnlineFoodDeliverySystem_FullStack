package com.online.food.delivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.online.food.delivery.entity.Menu_Items;
import com.online.food.delivery.service.MenuItemsService;


@RestController
@RequestMapping("/menu")
public class Menu_Items_Controller {

	@Autowired
	private MenuItemsService menuItemsService;
	
	@GetMapping("/getallmenu")
	public List<Menu_Items> getAllMenu(){
		return menuItemsService.getAllMenu();
	}
	
	
	
	@GetMapping("/getmenubyid/{id}")
	public Menu_Items getMenuById(@PathVariable("id")Integer id) {
		return menuItemsService.getMenuById(id);
	}
	
	
	
	@PostMapping("/addmenu")
	public void addMenu(@RequestBody Menu_Items menuItems) {
		menuItemsService.addMenu(menuItems);
		
	}
	
	
	
	@PutMapping("/updatemenu")
	public void updateMenu(@RequestBody Menu_Items updateMenu) {
		menuItemsService.updateMenu(updateMenu);
	}
	
	
	
	@DeleteMapping("/deletemenu/{id}")
	public void deleteMenu(@PathVariable("id") Integer id) {
		menuItemsService.deleteMenu(id);
	}
	
}
