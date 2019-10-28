package com.spring.shop.repository;

import com.spring.shop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findFirstByUsername(String name);
    void deleteUserById(Long id);

}