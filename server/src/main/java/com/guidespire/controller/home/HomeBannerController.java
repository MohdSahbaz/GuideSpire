package com.guidespire.controller.home;

import com.guidespire.model.HomeBanner;
import com.guidespire.payload.ApiResponse;
import com.guidespire.service.HomeBannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home/banners")
@CrossOrigin(origins = "*")
public class HomeBannerController {
    @Autowired
    private HomeBannerService service;

    @GetMapping
    public ResponseEntity<?> getAllBannerImages() {
        try {
            List<HomeBanner> banners = service.getAllBannerImages();
            if (banners.isEmpty()) {
                return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(
                                new ApiResponse<>(204, "No banner images found", null)
                        );
            }

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(
                            new ApiResponse<>(200, "Banner images fetched successfully.", banners)
                    );
        } catch (Exception e) {
            System.out.println("Failed to fetch banner images: " + e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Failed to fetch banner images", null)
                    );
        }
    }

    @PostMapping
    public ResponseEntity<?> createBannerImage(@Validated @RequestBody HomeBanner banner){
        try{
            HomeBanner saved = service.createHomeBannerImage(banner);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(
                            new ApiResponse<>(201, "Banner image created successfully.", saved)
                    );

        }catch (Exception e){
            System.out.println("Failed to create banner image: " + e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Failed to create  banner image", null)
                    );
        }
    }

}
