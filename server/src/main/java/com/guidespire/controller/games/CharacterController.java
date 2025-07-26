package com.guidespire.controller.games;

import com.guidespire.model.games.Character;
import com.guidespire.payload.ApiResponse;
import com.guidespire.service.games.CharacterService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/character")
@CrossOrigin(origins = "*")
@Tag(name = "Characters APIs")
public class CharacterController {
    @Autowired
    private CharacterService service;

    // Get characters by slug
    @GetMapping
    public ResponseEntity<?> getCharacterBySlug(@RequestParam String slug) {
        try {
            List<Character> characters = service.getAllCharacterBySlug(slug);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(
                            new ApiResponse<>(200, "Characters fetched successfully.", characters)
                    );
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Internal server error", null)
                    );
        }
    }

    @PostMapping
    public ResponseEntity<?> createCharacter(@RequestBody Character character) {
        try {
            boolean isCreated = service.createCharacter(character);
            if (isCreated) {
                return ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(
                                new ApiResponse<>(201, "Character created", true)
                        );
            } else {
                return ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(
                                new ApiResponse<>(400, "Character creation failed", null)
                        );
            }
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Internal server error", null)
                    );
        }
    }

}
