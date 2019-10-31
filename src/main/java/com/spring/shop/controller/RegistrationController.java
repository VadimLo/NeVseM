package com.spring.shop.controller;

import com.spring.shop.model.ConfirmationToken;
import com.spring.shop.model.User;
import com.spring.shop.model.UserRole;
import com.spring.shop.repository.ConfirmationTokenRepository;
import com.spring.shop.repository.UserRepository;
import com.spring.shop.service.mail.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class RegistrationController {

    private final PasswordEncoder passwordEncoder;
    private final ConfirmationTokenRepository confirmationTokenRepository;
    private final EmailSenderService emailSenderService;
    private final UserRepository userRepository;


    @PostMapping("/singup/reg")
    ResponseEntity<String> addUser(@RequestBody User user) {
        User byEmailAndUsername = userRepository.findFirstByEmailOrUsername(user.getEmail(), user.getUsername());
        if (byEmailAndUsername != null) {
            return ResponseEntity.badRequest().body("User with current username or email are consist. Please choice another");
            //(")
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
        return ResponseEntity.ok("Ok");

    }

    @GetMapping("singup/regtoken/{token}")
    RedirectView variateUser(@PathVariable String token, HttpServletResponse response) throws IOException {
        ConfirmationToken byConfirmationToken = confirmationTokenRepository.findByConfirmationToken(token);

        if (byConfirmationToken != null) {
            User user = userRepository.findByEmail(byConfirmationToken.getUser().getEmail());
            user.setEnabled(true);
            userRepository.save(user);
            // return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        //return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).build();
        return new RedirectView("http://localhost:4200/login");

    }
}
