package com.example.rest.Mappers;

import com.example.rest.DAO.Product;
import com.example.rest.DTO.ProductDTO;
import org.springframework.stereotype.Service;

@Service
public class ProductMapper implements Mapper<ProductDTO, Product>{


    @Override
    public ProductDTO mapToDto(Product entity) {
        return ProductDTO.builder()
                .id(entity.getId())
                .name(entity.getName())
                .quantity(entity.getQuantity())
                .build();
    }

    @Override
    public Product mapToEntity(ProductDTO dto) {
        return Product.builder()
                .id(dto.getId())
                .name(dto.getName())
                .quantity(dto.getQuantity())
                .build();
    }


}
