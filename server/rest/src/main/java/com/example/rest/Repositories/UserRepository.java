package com.example.rest.Repositories;

import com.example.rest.DAO.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
    List<User> findAll();

    default <T> Object findByLogin(User user){
        if(this.findAll().stream().filter(l -> l.getEmail().equals(user.getEmail())).findFirst().get()
                .getPassword().equals(user.getPassword()))
            return this.findAll().stream().filter(l -> l.getEmail().equals(user.getEmail())).findFirst().get();
        else return false;
    }
}
