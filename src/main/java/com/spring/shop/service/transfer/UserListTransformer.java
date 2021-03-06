package com.spring.shop.service.transfer;


import com.spring.shop.model.User;
import com.spring.shop.service.dto.UserListDto;
import org.springframework.stereotype.Component;


@Component
public class UserListTransformer {

    public UserListDto makeDto(final User user) {
        UserListDto dto = new UserListDto();
        dto.setId(user.getUserId());
        dto.setUsername(user.getUsername());
        dto.setRole(user.getRole().name());

        return dto;
    }
}
