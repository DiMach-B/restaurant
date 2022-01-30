package com.example.rest.Services;


import com.example.rest.DAO.Product;
import com.example.rest.Repositories.ProductsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductsRepository productsRepository;

    public Product createProduct(Product product){
        return productsRepository.save(product);
    }

    public List<Product> getProducts(){
        return productsRepository.findAll();
    }
}
