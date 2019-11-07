package com.spring.shop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Getter
@Setter
@EqualsAndHashCode

@NoArgsConstructor
public class TShirt {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private String driveId;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "userId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;



    public TShirt(String driveId, User user) {
        this.driveId = driveId;
        this.user = user;
    }
}
