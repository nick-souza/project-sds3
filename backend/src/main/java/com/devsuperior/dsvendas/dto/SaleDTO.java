package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Sale;

import java.time.LocalDate;

public class SaleDTO {

    private Long id;
    private Integer visited;
    private Integer deals;
    private Double amount;
    private LocalDate date;

    //So we can also get the Seller, and since this is in the controller layer, we dont want to get the seller
    // entity, so we use
    // the dto class instead:
    private SellerDTO seller;

    public SaleDTO() {

    }

    public SaleDTO(Long id, Integer visited, Integer deals, Double amount, LocalDate date, SellerDTO seller) {
        this.id = id;
        this.visited = visited;
        this.deals = deals;
        this.amount = amount;
        this.date = date;
        this.seller = seller;
    }

    //New constructor to receive a Seller entity, so we can easily copy the data from the entity to the dto
    public SaleDTO(Sale entity) {
        this.id = entity.getId();
        this.visited = entity.getVisited();
        this.deals = entity.getDeals();
        this.amount = entity.getAmount();
        this.date = entity.getDate();

        //Since the type of the entity.getSeller() is Seller, not SellerDTO, we use the constructor to convert:
        this.seller = new SellerDTO(entity.getSeller());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getVisited() {
        return visited;
    }

    public void setVisited(Integer visited) {
        this.visited = visited;
    }

    public Integer getDeals() {
        return deals;
    }

    public void setDeals(Integer deals) {
        this.deals = deals;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public SellerDTO getSeller() {
        return seller;
    }

    public void setSeller(SellerDTO seller) {
        this.seller = seller;
    }
}
