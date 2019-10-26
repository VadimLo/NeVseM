package com.spring.shop.controller;


import com.spring.shop.service.dto.AuthUserDto;
import com.spring.shop.service.dto.LoginRequestDto;
import com.spring.shop.service.dto.LoginResponseDto;
import com.spring.shop.service.transfer.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(value = "/login")
    @ResponseStatus(value = HttpStatus.OK)
    public LoginResponseDto login(
            @RequestBody final LoginRequestDto loginRequestDto
    ) {
        return authenticationService.login(loginRequestDto);
    }

    @GetMapping(value = "/me")
    @ResponseStatus(value = HttpStatus.OK)
    public AuthUserDto me() {
        return authenticationService.getMe();
    }
}
