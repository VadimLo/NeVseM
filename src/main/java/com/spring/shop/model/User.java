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
    private String firstName;
    private String lastName;
    private String username;


    private String password;

    @Column
    @Enumerated(EnumType.STRING)
    private UserRole role;



    public User(String firstName, String lastName, String username, String password,final UserRole role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.role = role;
    }




}