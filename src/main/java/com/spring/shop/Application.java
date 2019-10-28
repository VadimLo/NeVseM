package com.spring.shop;

import com.spring.shop.model.User;
import com.spring.shop.model.UserRole;
import com.spring.shop.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.stream.Stream;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner bootstrap(final UserRepository userRepository, final PasswordEncoder passwordEncoder) {
        return (args) -> {
            userRepository.save(
                    new User("Vadim", "Osipovich","p",passwordEncoder.encode("p"), UserRole.ROLE_ADMIN)
            );


            userRepository.findAll().stream().map(User::toString).forEach(System.out::println);
        };
    }
}
