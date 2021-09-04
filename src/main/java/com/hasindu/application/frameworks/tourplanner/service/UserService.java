package com.hasindu.application.frameworks.tourplanner.service;

import com.hasindu.application.frameworks.tourplanner.dto.UserDTO;

public interface UserService {
    UserDTO findUserByUserNameAndPassword(String userName,String passsword);
}
