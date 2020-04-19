package com.example.Upload_Dowload_files_MySQL.service;

import com.example.Upload_Dowload_files_MySQL.domain.ImageModel;
import com.example.Upload_Dowload_files_MySQL.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private ImageRepository imageRepository;
    @Autowired
    public ImageService(ImageRepository imageRepository){
        this.imageRepository = imageRepository;
    }

    public ImageModel findByName(String name){
        return imageRepository.findByName(name).orElseThrow(null);
    }

    public ImageModel uploadImage(ImageModel imageModel){
       return imageRepository.save(imageModel);
    }
}
