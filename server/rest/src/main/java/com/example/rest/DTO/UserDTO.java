package com.example.rest.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO implements DTO{
    private Integer id;
    private String email;
    private String password;
    private String role;

}
