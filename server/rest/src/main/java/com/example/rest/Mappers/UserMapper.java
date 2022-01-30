package com.example.rest.Mappers;


import com.example.rest.DAO.User;
import com.example.rest.DTO.UserDTO;
import org.springframework.stereotype.Service;

@Service
public class UserMapper implements Mapper<UserDTO, User> {
    @Override
    public UserDTO mapToDto(User entity) {
        return UserDTO.builder()
                .id(entity.getId())
                .email(entity.getEmail())
                .role(entity.getRole())
                .password(entity.getPassword())
                .build();
    }

    @Override
    public User mapToEntity(UserDTO dto) {
        return User.builder()
                .id(dto.getId())
                .email(dto.getEmail())
                .role(dto.getRole())
                .password(dto.getPassword())
                .build();
    }
}
