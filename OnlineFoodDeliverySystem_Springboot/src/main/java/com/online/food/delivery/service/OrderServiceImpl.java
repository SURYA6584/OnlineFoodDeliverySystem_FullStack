package com.online.food.delivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.online.food.delivery.entity.Orders;
import com.online.food.delivery.repository.OrdersRepository;

@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrdersRepository orderRepository;
	
	public List<Orders> getAllOrder(){
		return orderRepository.findAll();
	}
	
	public Orders getOrderById(String id) {
		return orderRepository.findById(id).get();
	}
	
	public String addOrder(Orders order) {
		orderRepository.save(order);
		return "order added Sucessfully";
	}
	
    public String updateOrder(Orders updateOrder) {
    	Optional<Orders> orderOptional = orderRepository.findById(updateOrder.getOrder_id());
    	if(orderOptional.isPresent()) {
    		Orders existingOrder = orderOptional.get();
    		
    		existingOrder.setDelivery_address(updateOrder.getDelivery_address());
    		existingOrder.setOrder_date(updateOrder.getOrder_date());
    		existingOrder.setPayment_method(updateOrder.getPayment_method());
    		existingOrder.setTotal_amount(updateOrder.getTotal_amount());
    		existingOrder.setCustomers(updateOrder.getCustomers());
    		existingOrder.setRestaurants(updateOrder.getRestaurants());
    		
    		return "Order Updated Sucessfully";
    		
    	}
    	else {
    		return "Provide a Valid Order ID !!";
    	}
    }
	public String deleteMenu(String id) {
		Optional<Orders> OrderOptional = orderRepository.findById(id);
		Orders deleteOrder = OrderOptional.get();
		if(deleteOrder!=null) {
			orderRepository.delete(deleteOrder);
			
			return "Deleted Sucessfully !!";
		}
		else {
			return "Kindly Provide a Valid ID ";
		}
	}
}
