package com.example.Upload_Dowload_files_MySQL.controller;

import com.example.Upload_Dowload_files_MySQL.domain.ImageModel;
import com.example.Upload_Dowload_files_MySQL.repository.ImageRepository;
import com.example.Upload_Dowload_files_MySQL.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "image")
public class ImageController {
    private ImageService imageService;
    private ImageRepository imageRepository;
    @Autowired
    public ImageController(ImageService imageService, ImageRepository imageRepository){
        this.imageService = imageService;
        this.imageRepository = imageRepository;
    }

    @PostMapping("/upload")
    //the imageFile pertains to the file name which is also the imageFile on frontend - app.component.ts
    public int uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        System.out.println("Original Image Byte Size - "+ file.getBytes().length);
        //create blank ImageModel where we wil store the input file
        //also invoking the compressor to the data
        ImageModel imageModel = new ImageModel(file.getOriginalFilename(), file.getContentType(), compressBytes(file.getBytes()));
        //saving it to repository
        imageService.uploadImage(imageModel);
        //modified some changes on output data type (from Response.BodyBuilder to int )
        //and on the return here so that it will just pass 200 on the front
        //end for {observe:"response"} body on post and subscribe

        //.status(int status) -> output : BodyBuilder
        //HttpStatus.OK -> output : HttpStatus
        System.out.println(ResponseEntity.status(HttpStatus.OK));
        //.build() -> output : ResponseEntity<T>
        System.out.println( ResponseEntity.status(HttpStatus.OK).build());
        //.getStatusCode() -> output : HttpStatus
        System.out.println(ResponseEntity.status(HttpStatus.OK).build().getStatusCode());
        //.value() -> output : int
        System.out.println( ResponseEntity.status(HttpStatus.OK).build().getStatusCode().value());

        return ResponseEntity.status(HttpStatus.OK).build().getStatusCode().value();
    }

    @GetMapping("/get/{name}")
    public ImageModel getImage(@PathVariable String name){
        Optional<ImageModel> retrieveImage = Optional.ofNullable(imageService.findByName(name));
        //create blank ImageModel where we wil store the retrieve file based on input name
        //and invoking decompression
        ImageModel imageModel = new ImageModel(retrieveImage.get().getName(),retrieveImage.get().getType(),decompressBytes(retrieveImage.get().getPicByte()));
        return imageModel;

    }


    // compress the image bytes before storing it in the database
    public static byte[] compressBytes(byte[] data){
        //blank data compressor
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();

        //for data writing
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];

        //.finished() -> output : boolean
        while (!deflater.finished()){
            //.deflate(byte[] output) -> output : int
            int count = deflater.deflate(buffer);
            //.write(int b) -> output : void
            outputStream.write(buffer, 0, count);
            //write(byte[] b, int off, int len) method converts the stream's contents using the specified charsetName.
        }
        //closing the writer and throwing try/catch on .close()
        try {
            outputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        //.toByteArray() -> output : byte[]
        //.length -> output : int
        System.out.println("Compressed Image Byt Size : "+outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }

    // uncompress the image bytes before returning it to the angular application
    public static byte[] decompressBytes(byte[] data){
        //blank data decompressor
        Inflater inflater = new Inflater();
        inflater.setInput(data);

        //for data writing
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];


        try {
            while (!inflater.finished()) {
                //.inflate(ByteBuffer output) -> output : int then throw try/catch on .inflate
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0,count);
            }
            outputStream.close();
        } catch (DataFormatException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        //.toByteArray() -> output : byte[]
        return outputStream.toByteArray();
    }


}
