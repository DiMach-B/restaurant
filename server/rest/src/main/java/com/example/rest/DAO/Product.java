package com.example.rest.DAO;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(schema = "rest", name = "products")
public class Product implements DAOEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Min(0)
    @Column(name = "quantity")
    private Integer quantity;

    @JsonBackReference
    @ManyToMany(mappedBy = "products")
    private List<Dish> dishes;


}
