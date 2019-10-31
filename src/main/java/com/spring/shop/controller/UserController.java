package com.spring.shop.controller;

import com.spring.shop.model.ConfirmationToken;
import com.spring.shop.model.User;
import com.spring.shop.model.UserRole;
import com.spring.shop.repository.ConfirmationTokenRepository;
import com.spring.shop.repository.UserRepository;
import com.spring.shop.service.mail.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    // standard constructors

    private final UserRepository userRepository;


    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/users")
    @ResponseStatus(value = HttpStatus.OK)
    public List<User> getUsers() {

        return (List<User>) userRepository.findAll();
    }


    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/users/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    @Transactional
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteUserById(id);
    }


}