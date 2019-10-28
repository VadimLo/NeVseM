package com.spring.shop.controller;

import com.spring.shop.model.StringResponse;
import com.spring.shop.model.User;
import com.spring.shop.model.UserRole;
import com.spring.shop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    // standard constructors

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

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

    @PostMapping("/singup/reg")
    //@ResponseStatus(value = HttpStatus.OK)

    HttpStatus addUser(@RequestBody User user) {
        User byUsername = userRepository.findFirstByUsername(user.getUsername());
        if (byUsername == null) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole(UserRole.ROLE_USER);
            userRepository.save(user);
            return HttpStatus.OK;
        }

        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
}