package com.online.food.delivery.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="restaurants")
public class Restaurants {
	@Id
	@Column(name="restaurant_id")
	private Integer restaurant_id;
	
	@Column(name="images")
	private String images;
	
	@Column(name="restaurant_name")
	private String restaurant_name;
	
	@Column(name="cuisine_type")
	private String cuisine_type;
	
	@Column(name ="location")
	private String location;
	
	@Column(name ="phone")
	private Double phone ;
	
	@Column(name ="price")
	private Double price ;

}

