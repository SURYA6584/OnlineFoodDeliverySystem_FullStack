package com.online.food.delivery.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.online.food.delivery.entity.Admin;


@Repository
public interface AdminRespository extends JpaRepository<Admin,String >{
		Optional<Admin> findOneByEmailAndPassword(String email,String password);
		Admin findByEmail(String email);
		Optional<Admin> findById(String customer_id);
}
