package com.guidespire.controller;

import com.guidespire.model.FeaturedGame;
import com.guidespire.payload.ApiResponse;
import com.guidespire.service.FeaturedGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home")
@CrossOrigin(origins = "*")
public class HomeController {

    @Autowired
    private FeaturedGameService service;

    @GetMapping("/featured-games")
    public ResponseEntity<?> getFeaturedGames() {

        try {
            List<FeaturedGame> featuredGames = service.getAllFeaturedGames();
            if (featuredGames.isEmpty()) {
                return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(
                                new ApiResponse<>(204, "No featured games available.", null)
                        );
            }

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(
                            new ApiResponse<>(200, "Featured games fetched successfully.", featuredGames)
                    );
        } catch (Exception e) {
            System.out.println("Failed to fetch featured games: " + e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Failed to fetch featured games: " + e.getMessage(), null)
                    );
        }
    }

    @PostMapping("/featured-games")
    public ResponseEntity<?> createFeaturedGame(@Validated @RequestBody FeaturedGame game) {
        try {
            FeaturedGame saved = service.createFeaturedGames(game);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(
                            new ApiResponse<>(201, "Featured game created successfully.", saved)
                    );
        } catch (Exception e) {
            System.out.println("Failed to create featured game: " + e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Failed to create featured game: " + e.getMessage(), null)
                    );
        }
    }
}
