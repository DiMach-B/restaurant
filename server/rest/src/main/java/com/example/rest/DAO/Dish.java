package com.example.rest.DAO;


import com.fasterxml.jackson.annotation.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.List;

@Slf4j
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Builder
@Table(schema = "rest", name = "dishes")
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Dish implements DAOEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Min(0)
    @Column(name = "amount")
    private Integer amount;

    @ManyToMany
    @JoinTable(schema = "rest", name = "dishes_products",
    joinColumns = {@JoinColumn(name = "dish_id")},
    inverseJoinColumns = {@JoinColumn(name = "product_id")})
    private List<Product> products;

    @Column(name = "in_menu")
    private Boolean inMenu;

    @JsonBackReference
    @ManyToMany(mappedBy = "dishes")
    private List<Order> orders;


}
