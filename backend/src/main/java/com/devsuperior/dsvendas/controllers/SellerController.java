package com.devsuperior.dsvendas.controllers;

import ch.qos.logback.core.pattern.util.RegularEscapeUtil;
import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//Indicating that this class is a rest controller
@RequestMapping(value = "/sellers")
//To indicate the path
public class SellerController {

    @Autowired
    private SellerService service;

    @GetMapping
    public ResponseEntity<List<SellerDTO>> findAll(){
        //Saving the result to a SellerDTO list, using the service findAll method;
        List<SellerDTO> list = service.findAll();
        //Now returning the ResponseEntity with the 200 ok passing the created list in the raw body;
        return ResponseEntity.ok(list);
    }
}
