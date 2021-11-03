package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;

import java.io.Serializable;

// Object that will contain the same data as the Seller, but this object will have no relationship with JPA, DataBase or anything.
// So we can return the result of HTTP requests;

//Implementing the Serializable to make sure this object can be converted to bytes later on:
public class SellerDTO implements Serializable {

    private Long id;
    private String name;

    public SellerDTO() {

    }

    public SellerDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    //New constructor to receive a Seller entity, so we can easily copy the data from the entity to the dto
    public SellerDTO(Seller entity) {
        this.id = entity.getId();
        this.name = entity.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
