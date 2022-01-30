package com.example.rest.Controllers;


import com.example.rest.DTO.ProductDTO;
import com.example.rest.Mappers.ProductMapper;
import com.example.rest.Services.ProductService;
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
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final ProductMapper mapper;


    //создание продукта
    @RequestMapping(value = "/create",produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<ProductDTO> createProduct(@Valid @RequestBody ProductDTO product){
        log.info("Product create - {}", product.getName());
        return ResponseEntity.ok(mapper.mapToDto(productService.createProduct(mapper.mapToEntity(product))));
    }

    //Отображение всех продуктов
    @RequestMapping(produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<List<ProductDTO>> getProducts(){
        log.info("Get products");
        return ResponseEntity.ok(mapper.mapToDto(productService.getProducts()));
    }
}
