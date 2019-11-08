package com.spring.shop.controller;

import com.spring.shop.DriveQuickstart;
import com.spring.shop.model.TShirt;
import com.spring.shop.model.User;
import com.spring.shop.repository.TShirtRepository;
import com.spring.shop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.multipart.MultipartFile;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.security.GeneralSecurityException;

import sun.misc.BASE64Decoder;

import javax.imageio.ImageIO;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class ImageController {


    private final TShirtRepository tShirtRepository;
    private final UserRepository userRepository;

    @PostMapping("/img/hi")
    @ResponseStatus(value = HttpStatus.OK)
    public void getUsers(@RequestBody TShirt tShirt) throws IOException, GeneralSecurityException {
       //System.out.println(file);
        String base64Image = tShirt.getImage().split(",")[1];
        byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Image);





        //System.out.println(tShirt.getUser().getTShirts());
        tShirt.setImage(DriveQuickstart.uploadImage(imageBytes));
        tShirtRepository.save(tShirt);

    }

}
