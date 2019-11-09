package com.spring.shop.model;

import com.fasterxml.jackson.annotation.*;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.ReadOnlyProperty;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@EqualsAndHashCode

@NoArgsConstructor
public class TShirt   {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String style;
    private String tags;
    private String image;



    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "userId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)


    @JsonIgnore
    private User user;


    public TShirt(String name, String style, String tags, String image, User user) {
        this.name = name;
        this.style = style;
        this.tags = tags;
        this.image = image;
        this.user = user;
    }
}
