package com.example.rest.Mappers;

import com.example.rest.DAO.DAOEntity;
import com.example.rest.DTO.DTO;

import java.util.List;
import java.util.stream.Collectors;

public interface Mapper<T extends DTO, S extends DAOEntity> {
    T mapToDto(S entity);

    default List<T> mapToDto(List<S> entities) {
        return entities.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    S mapToEntity(T dto);

    default List<S> mapToEntity(List<T> dto) {
        return dto.stream()
                .map(this::mapToEntity)
                .collect(Collectors.toList());
    }
}
