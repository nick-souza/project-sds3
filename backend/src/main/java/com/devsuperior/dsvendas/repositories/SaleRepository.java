package com.devsuperior.dsvendas.repositories;

import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

//Repository so we can have the CRUD operations already from the JpaRepository
public interface SaleRepository extends JpaRepository<Sale, Long> {

    //Adding a custom method to the repository, so we can make a request to group by the amount of sales:
    @Query("SELECT new com.devsuperior.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) " + " FROM Sale AS obj " + "GROUP BY obj.seller")
    //Using the JPQL syntax in the query argument
    List<SaleSumDTO> amountGroupedBySeller();

    //Adding a custom method to the repository, so we can make a request to group by the success rate:
    @Query("SELECT new com.devsuperior.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) " +
            "FROM Sale AS obj GROUP BY obj.seller")
    //Using the JPQL syntax in the query argument
    List<SaleSuccessDTO> successGroupedBySeller();

}
