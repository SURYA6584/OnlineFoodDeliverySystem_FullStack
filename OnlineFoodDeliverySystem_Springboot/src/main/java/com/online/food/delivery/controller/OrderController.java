package com.online.food.delivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.food.delivery.entity.Orders;
import com.online.food.delivery.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	@GetMapping("/getallorder")
	public List<Orders> getAllOrder(){
		return orderService.getAllOrder();
	}
	
	@GetMapping("/getorderbyid/{id}")
	public Orders getOrderById(@PathVariable("id") String id) {
		return orderService.getOrderById(id);
	}
	
	@PostMapping("/addorder")
	public String addOrder(@RequestBody Orders order) {
		orderService.addOrder(order);
		return "order added Sucessfully";
	}
	
    @PutMapping("/updateorder")
    public void updateOrder(@RequestBody Orders updateOrder) {
    	orderService.updateOrder(updateOrder);
    }
    
	@DeleteMapping("/deleteorder/{id}")
	public void deleteMenu(@PathVariable("id") String id) {
		orderService.deleteMenu(id);
	}
}
