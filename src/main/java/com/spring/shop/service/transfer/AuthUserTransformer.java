package com.spring.shop.service.transfer;



import com.spring.shop.model.User;
import com.spring.shop.service.dto.AuthUserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * @author n.kragel
 * @since 22.07.2016
 */
@Component
@RequiredArgsConstructor
public class AuthUserTransformer {

    public AuthUserDto makeDto(final User user) {
        AuthUserDto authUserDto = new AuthUserDto();

        authUserDto.setUserId(user.getUserId());
        authUserDto.setUsername(user.getUsername());
        authUserDto.setRole(user.getRole().name());

        return authUserDto;
    }

}
