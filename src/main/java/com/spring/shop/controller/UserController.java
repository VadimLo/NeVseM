package com.spring.shop.controller;

import com.spring.shop.model.User;
import com.spring.shop.model.UserRole;
import com.spring.shop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.List;

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
    public void deleteUser(@PathVariable Long id){
        userRepository.deleteUserById(id);
    }

    @PostMapping("/singup/reg")
    @ResponseStatus(value = HttpStatus.OK)
    void addUser(@RequestBody User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(UserRole.ROLE_USER);
        userRepository.save(user);
    }
}