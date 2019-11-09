package com.spring.shop.controller;

import com.spring.shop.model.User;
import com.spring.shop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
        userRepository.deleteUserByUserId(id);
    }

    @PostMapping("/users/update")
    @ResponseStatus(value = HttpStatus.OK)
    public User updateUser(@RequestBody User user) {

        User existing = userRepository.findByUserId(user.getUserId());
        copyNonNullProperties(user, existing);

        return userRepository.save(existing);

    }

    public static void copyNonNullProperties(Object src, Object target) {
        BeanUtils.copyProperties(src, target, getNullPropertyNames(src));
    }

    private static String[] getNullPropertyNames(Object source) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        java.beans.PropertyDescriptor[] pds = src.getPropertyDescriptors();

        Set<String> emptyNames = new HashSet<String>();
        for(java.beans.PropertyDescriptor pd : pds) {
            Object srcValue = src.getPropertyValue(pd.getName());
            if (srcValue == null) emptyNames.add(pd.getName());
        }
        String[] result = new String[emptyNames.size()];
        return emptyNames.toArray(result);
    }


}