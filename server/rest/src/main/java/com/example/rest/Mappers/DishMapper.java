package com.example.rest.Mappers;

import com.example.rest.DAO.Dish;
import com.example.rest.DTO.DishDTO;
import com.example.rest.DTO.ProductDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DishMapper implements Mapper<DishDTO, Dish>{

    private final ProductMapper mapper;

    @Override
    public DishDTO mapToDto(Dish entity) {
        return DishDTO.builder()
                .id(entity.getId())
                .amount(entity.getAmount())
                .name(entity.getName())
                .inMenu(entity.getInMenu())
                .products(mapper.mapToDto(entity.getProducts()))
                .build();
    }

    @Override
    public Dish mapToEntity(DishDTO dto) {
        List<ProductDTO> products = dto.getProducts();
        return Dish.builder()
                .id(dto.getId())
                .amount(dto.getAmount())
                .name(dto.getName())
                .inMenu(dto.getInMenu())
                .products(mapper.mapToEntity(products))
                .build();
    }
}
