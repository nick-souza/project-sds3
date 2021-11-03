package com.devsuperior.dsvendas.repositories;

import com.devsuperior.dsvendas.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

//Repository so we can have the CRUD operations already from the JpaRepository
public interface SellerRepository extends JpaRepository<Seller, Long> {
}
