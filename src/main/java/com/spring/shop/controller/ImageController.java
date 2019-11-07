package com.spring.shop.controller;

import com.spring.shop.DriveQuickstart;
import com.spring.shop.model.TShirt;
import com.spring.shop.repository.TShirtRepository;
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

public class ImageController {


    private final TShirtRepository tShirtRepository;

    @PostMapping("/img/hi")
    @ResponseStatus(value = HttpStatus.OK)
    public void getUsers(@RequestBody() String file) throws IOException, GeneralSecurityException {
       System.out.println(file);
        String base64Image = file.split(",")[1];
        byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Image);
        BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));
        TShirt tShirt = new TShirt();
        tShirt.setDriveId(DriveQuickstart.uploadImage(imageBytes));
        tShirtRepository.save(tShirt);

    }

}
