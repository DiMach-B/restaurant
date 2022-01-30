package com.example.rest.DTO;

import com.example.rest.DAO.Order;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DishDTO implements DTO{
    private Integer id;
    private String name;
    private Integer amount;
    private List<ProductDTO> products;
    private Boolean inMenu;
    @JsonBackReference
    private List<OrderDTO> orders;
}
