package com.spring.shop.repository;

import com.spring.shop.model.ConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken,String> {
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
