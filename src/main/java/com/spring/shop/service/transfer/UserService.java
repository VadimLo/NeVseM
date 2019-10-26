package com.spring.shop.service.transfer;


import com.spring.shop.model.User;
import com.spring.shop.repository.UserRepository;
import com.spring.shop.service.dto.UserListDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
@RequiredArgsConstructor
public class UserService {


    private final UserRepository userRepository;
    private final UserListTransformer userListTransformer;

    @Transactional(readOnly = true)
    public List<UserListDto> findAll() {
        List<User> users = userRepository.findAll();

        List<UserListDto> userDtoList = new ArrayList<>();
        for (User user : users) {
            UserListDto dto = this.userListTransformer.makeDto(user);
            userDtoList.add(dto);
        }

        return userDtoList;
    }
}
