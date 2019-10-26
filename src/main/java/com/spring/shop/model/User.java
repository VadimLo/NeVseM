package com.spring.shop.model;

import lombok.*;

import javax.persistence.*;


@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String email;

    @Column
    @Enumerated(EnumType.STRING)
    private UserRole role;


    public User(String username, String password, final UserRole role) {
        this.name = username;
        this.email = password;
        this.role = role;
    }




}