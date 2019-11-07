package com.spring.shop.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.List;


@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userId;
    private String firstName;
    private String lastName;
    private String username;
    @Email(message = "Email should be valid")
    private String email;
    private boolean isEnabled;
    private String password;



    @Column
    @Enumerated(EnumType.STRING)
    private UserRole role;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<TShirt> tShirts;


    public User(String firstName, String lastName, String username, String password, String email,boolean isEnabled, final UserRole role,  List<TShirt> tShirts) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email=email;
        this.isEnabled = isEnabled;
        this.role = role;
        this.tShirts = tShirts;
    }


}