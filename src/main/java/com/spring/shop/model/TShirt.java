package com.spring.shop.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class TShirt {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private String driveId;

    public TShirt(String driveId) {
        this.driveId = driveId;
    }
    private User user;
}
