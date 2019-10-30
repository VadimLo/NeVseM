package com.spring.shop.controller;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    // standard constructors

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ConfirmationTokenRepository confirmationTokenRepository;
    private final EmailSenderService emailSenderService;

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
    HttpStatus addUser(@RequestBody User user) {
        User byEmailAndUsername = userRepository.findByEmailAndUsername(user.getEmail(), user.getUsername());
        if (byEmailAndUsername != null) {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(UserRole.ROLE_USER);


        userRepository.save(user);
        ConfirmationToken confirmationToken = new ConfirmationToken(user);

        confirmationTokenRepository.save(confirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getEmail());
        mailMessage.setSubject("Complete Registration!");
        mailMessage.setFrom("vadimlobad@gmail.com");
        mailMessage.setText("To confirm your account, please click here : "
                + "http://localhost:8080/singup/regtoken/" + confirmationToken.getConfirmationToken());

        emailSenderService.sendEmail(mailMessage);
        return HttpStatus.OK;

    }

    @GetMapping("singup/regtoken/{token}")
    void variateUser(@PathVariable String token) {
        System.out.println("hi daun");
        ConfirmationToken byConfirmationToken = confirmationTokenRepository.findByConfirmationToken(token);

        if (byConfirmationToken != null) {
            User user = userRepository.findByEmail(byConfirmationToken.getUser().getEmail());
            user.setEnabled(true);
            userRepository.save(user);
           // return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        //return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).build();


    }
}