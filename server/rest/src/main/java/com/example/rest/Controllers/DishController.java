package com.example.rest.Controllers;


import com.example.rest.DTO.DishDTO;
import com.example.rest.Mappers.DishMapper;
import com.example.rest.Services.DishService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/dish")
public class DishController {

    private final DishService dishService;
    private final DishMapper mapper;


    //Создание блюда
    @RequestMapping(value = "/create",produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<DishDTO> createDish(@Valid @RequestBody DishDTO dishDto){
        log.info("Dish create - {}", dishDto.getName());
        return ResponseEntity.ok(mapper.mapToDto(dishService.createDish(mapper.mapToEntity(dishDto))));
    }

    //Отображение всех блюд
    @RequestMapping(produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<List<DishDTO>> getDishes(){
        log.info("Get dishes");
        return ResponseEntity.ok(mapper.mapToDto(dishService.getDishes()));
    }

    //Отображение одного блюда по его ID
    @RequestMapping(path = "/getById/{id}", produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<DishDTO> getDish(@PathVariable Integer id){
        return ResponseEntity.ok(mapper.mapToDto(dishService.getDishById(id)));
    }

    //Изменение поля in_menu для составление меню (на вход идёт объект Dish, с уже изменённым полем in_menu)
    @RequestMapping(value = "/menu", produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<DishDTO> changeInMenu(@RequestBody DishDTO dishDto){
        return ResponseEntity.ok(mapper.mapToDto(dishService.menu(mapper.mapToEntity(dishDto))));
    }


}
