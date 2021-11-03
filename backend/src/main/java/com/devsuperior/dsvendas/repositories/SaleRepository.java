package com.devsuperior.dsvendas.repositories;

import com.devsuperior.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

//Repository so we can have the CRUD operations already from the JpaRepository
public interface SaleRepository extends JpaRepository<Sale, Long> {
}
