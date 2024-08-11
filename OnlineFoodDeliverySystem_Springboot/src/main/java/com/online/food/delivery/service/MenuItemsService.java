package com.online.food.delivery.service;

import java.util.List;

import com.online.food.delivery.entity.Menu_Items;

public interface MenuItemsService {
	public List<Menu_Items> getAllMenu();
	public Menu_Items getMenuById(Integer id);
	public String addMenu(Menu_Items menuItems);
	public String updateMenu(Menu_Items updateMenu);
	public String deleteMenu(Integer id);
}
