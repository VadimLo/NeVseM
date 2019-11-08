package com.spring.shop.service.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthUserDto implements Dto {
    private long userId;
    private String username;
    private String role;
}
