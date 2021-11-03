package com.devsuperior.dsvendas.service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
//Registering the class as a service component to be injected
public class SellerService {

    @Autowired
    //Injecting the dependency
    private SellerRepository repository;

    //So for the request we want to return a SellerDTO list
    public List<SellerDTO> findAll() {
        //Saving the result to a variable type Seller, because the findAll returns a list of entity,
        // so we need to convert the entity to the dto object.
        List<Seller> result = repository.findAll();
        //Converting using lambda expression:
        return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
    }
}
