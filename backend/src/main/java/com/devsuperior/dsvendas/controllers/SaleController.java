package com.devsuperior.dsvendas.controllers;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//Indicating that this class is a rest controller
@RequestMapping(value = "/sales")
//To indicate the path
public class SaleController {

    @Autowired
    private SaleService service;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
        //Saving the result to a SellerDTO list, using the service findAll method;
        Page<SaleDTO> list = service.findAll(pageable);
        //Now returning the ResponseEntity with the 200 ok passing the created list in the raw body;
        return ResponseEntity.ok(list);
    }
}
