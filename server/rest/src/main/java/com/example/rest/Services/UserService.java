package com.example.rest.Services;

import com.example.rest.DAO.User;
import com.example.rest.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

    public <T> Object getUser(User user){
        return userRepository.findByLogin(user);
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }
}
