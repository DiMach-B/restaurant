package com.example.rest.Mappers;

import com.example.rest.DAO.Order;
import com.example.rest.DTO.OrderDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderMapper implements Mapper<OrderDTO, Order>{

    private final DishMapper dishMapper;
    private final UserMapper userMapper;

    @Override
    public OrderDTO mapToDto(Order entity) {
        return OrderDTO.builder()
                .id(entity.getId())
                .user(userMapper.mapToDto(entity.getUser()))
                .dishes(dishMapper.mapToDto(entity.getDishes()))
                .date(entity.getDate())
                .status(entity.getStatus())
                .build();
    }

    @Override
    public Order mapToEntity(OrderDTO dto) {
        return Order.builder()
                .id(dto.getId())
                .user(userMapper.mapToEntity(dto.getUser()))
                .dishes(dishMapper.mapToEntity(dto.getDishes()))
                .date(dto.getDate())
                .status(dto.getStatus())
                .build();
    }
}
