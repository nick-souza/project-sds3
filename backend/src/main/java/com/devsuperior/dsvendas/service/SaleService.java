package com.devsuperior.dsvendas.service;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
//Registering the class as a service component to be injected
public class SaleService {

    @Autowired
    //Injecting the dependency
    private SaleRepository repository;

    @Autowired
    private SellerRepository sellerRepository;

    //Annotation to make sure that the interaction with the db is resolved in this code block, and only to readonly
    @Transactional(readOnly = true)
    //So for the request we want to return a SaleDTO list, but using pagination:
    public Page<SaleDTO> findAll(Pageable pageable) {
        //Simple solution to avoid repeating selection from the db, as for now, it searches once every seller we
        // have, but we can
        //solve that by storing in the cache
        sellerRepository.findAll();
        //Saving the result to a variable type Seller, because the findAll returns a list of entity,
        // so we need to convert the entity to the dto object.
        Page<Sale> result = repository.findAll(pageable);
        //Converting using lambda expression:
        return result.map(x -> new SaleDTO(x));
    }

    //Method to get the grouped by the total sales:
    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller() {
        return repository.amountGroupedBySeller();
    }

    //Method to get the grouped by the success rate:
    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupedBySeller() {
        return repository.successGroupedBySeller();
    }
}
