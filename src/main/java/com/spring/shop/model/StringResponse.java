package com.spring.shop.model;

public class StringResponse {

    private String message;
    private boolean flag;

    public StringResponse(String s,boolean flag) {
        this.message = s;
        this.flag =flag;
    }

    // get/set omitted...
}