package com.hasindu.application.frameworks.tourplanner.repository;

import com.hasindu.application.frameworks.tourplanner.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByUserNameAndPassword(String userName,String password);


}
