package com.guidespire.controller.home;


import com.guidespire.model.LatestGuides;
import com.guidespire.payload.ApiResponse;
import com.guidespire.service.LatestGuidesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home/latest-guides")
@CrossOrigin(origins = "*")
public class LatestGuidesController {
    @Autowired
    private LatestGuidesService service;

    @GetMapping
    public ResponseEntity<?> getAllLatestGuides() {
        try {
            List<LatestGuides> guides = service.getAllLatestGuides();
            if (guides.isEmpty()) {
                return ResponseEntity
                        .status(HttpStatus.NO_CONTENT)
                        .body(
                                new ApiResponse<>(204, "No latest guides available", null)
                        );
            }

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(
                            new ApiResponse<>(200, "Latest guides fetched successfully.", guides)
                    );
        } catch (Exception e) {
            System.out.println("Failed to fetch latest guides: " + e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Failed to fetch latest guides", null)
                    );
        }
    }

    @PostMapping
    public ResponseEntity<?> createLatestGuides(@Validated @RequestBody LatestGuides guides) {
        if(guides.getName() == null || guides.getTitle() == null || guides.getImage() == null || guides.getDescription() == null || guides.getSlug() == null){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(
                            new ApiResponse<>(400, "All fields are required", guides)
                    );
        }
        try {
            LatestGuides saved = service.createLatestGuide(guides);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(
                            new ApiResponse<>(200, "Latest guide created successfully.", saved)
                    );
        } catch (Exception e) {
            System.out.println("Failed to create latest guide: " + e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Failed to create latest guide", null)
                    );
        }
    }
}
