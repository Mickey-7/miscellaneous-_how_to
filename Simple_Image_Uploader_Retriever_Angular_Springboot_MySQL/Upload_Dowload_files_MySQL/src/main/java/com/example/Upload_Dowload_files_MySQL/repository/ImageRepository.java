package com.example.Upload_Dowload_files_MySQL.repository;

import com.example.Upload_Dowload_files_MySQL.domain.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface ImageRepository extends JpaRepository<ImageModel,Long> {
    Optional<ImageModel> findByName(String name);
}
