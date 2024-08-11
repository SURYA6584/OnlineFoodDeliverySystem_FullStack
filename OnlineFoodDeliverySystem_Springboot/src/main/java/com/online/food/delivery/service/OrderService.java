package com.online.food.delivery.service;

import java.util.List;

import com.online.food.delivery.entity.Orders;

public interface OrderService {
	public List<Orders> getAllOrder();
	public Orders getOrderById(String id);
	public String addOrder(Orders order);
    public String updateOrder(Orders updateOrder);
	public String deleteMenu(String id);




}