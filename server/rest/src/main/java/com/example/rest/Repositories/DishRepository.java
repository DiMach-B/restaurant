package com.example.rest.Repositories;

import com.example.rest.DAO.Dish;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends CrudRepository<Dish, Integer> {
    List<Dish> findAll();

    default Dish findByName(String name){
        return this.findAll().stream().filter(d -> d.getName().equals(name)).findFirst().orElse(null);
    }
}
