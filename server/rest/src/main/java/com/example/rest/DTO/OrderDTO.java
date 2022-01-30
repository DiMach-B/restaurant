package com.example.rest.DTO;

import com.example.rest.DAO.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO implements DTO{
    private Integer id;
    private UserDTO user;
    private List<DishDTO> dishes;
    private Date date;
    private String status;
}
