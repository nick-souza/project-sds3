package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;

import java.io.Serializable;

//Class to handle the sum of the total sales for each seller, so we can display it in the Apex Chart
public class SaleSumDTO implements Serializable {

    private String sellerName;
    private Double sum;

    public SaleSumDTO() {

    }

    //Using the Seller seller instead of String sellerName because we have to group by the name, no sellerName
    public SaleSumDTO(Seller seller, Double sum) {
        this.sellerName = seller.getName();
        this.sum = sum;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public Double getSum() {
        return sum;
    }

    public void setSum(Double sum) {
        this.sum = sum;
    }
}
