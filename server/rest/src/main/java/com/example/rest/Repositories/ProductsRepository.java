package com.example.rest.Repositories;

import com.example.rest.DAO.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends CrudRepository<Product, Integer> {
    List<Product> findAll();
}
