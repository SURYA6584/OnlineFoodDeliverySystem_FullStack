package com.online.food.delivery.entity;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Orders {
	
	@Id
    private String order_id;
	
	@ManyToOne
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	private Customers customers;
	
	@ManyToOne
	@JoinColumn(name = "restaurant_id", referencedColumnName = "restaurant_id")
	private Restaurants restaurants;
	
	@Column(name="order_date")
	private Date order_date;
	
	@Column(name="delivery_address")
	private String delivery_address;
	
	@Column(name="payment_method")
	private String payment_method;
	
	@Column(name="total_amount")
	private Double total_amount;
	
	
}


