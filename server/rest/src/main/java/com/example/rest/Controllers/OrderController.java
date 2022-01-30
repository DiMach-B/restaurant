package com.example.rest.Controllers;


import com.example.rest.DTO.OrderDTO;
import com.example.rest.Mappers.OrderMapper;
import com.example.rest.Services.DishService;
import com.example.rest.Services.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Slf4j
@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;
    private final DishService dishService;
    private final OrderMapper mapper;

    //создание заказа
    @RequestMapping(value = "/create",produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<OrderDTO> createOrder(@Valid @RequestBody OrderDTO orderDto){
        log.info("Order create - {}", orderDto);
        return ResponseEntity.ok(mapper.mapToDto(orderService.createOrder(mapper.mapToEntity(orderDto))));
    }

    //отображение всех заказов
    @RequestMapping(produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<List<OrderDTO>> getOrders(){
        log.info("get Orders");
        return ResponseEntity.ok(mapper.mapToDto(orderService.getOrders()));
    }

    //подсчёт выручки всех заказов
    @RequestMapping(value = "/amount", produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public Double getAmmount(){
        log.info("Get amount");
        return orderService.getSumm();
    }

    //Изменение статуса заказа (На вход идёт объект Order с уже изменённым статусом)
    @RequestMapping(value = "/status",produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<OrderDTO> changeStatus(@RequestBody OrderDTO orderDto){
        log.info("Change status - {}", orderDto);
        return ResponseEntity.ok(mapper.mapToDto(orderService.changeStatus(mapper.mapToEntity(orderDto))));
    }

    @RequestMapping(value = "/Ids", method = RequestMethod.GET)
    public List<Integer> getIdOrders(){
        return orderService.getIdOrders();
    }

    @RequestMapping(path = "/getById/{id}",produces = APPLICATION_JSON_VALUE,method = RequestMethod.GET)
    public ResponseEntity<OrderDTO> getOrder(@PathVariable Integer id){
        return ResponseEntity.ok(mapper.mapToDto(orderService.getOrder(id)));
    }

}
