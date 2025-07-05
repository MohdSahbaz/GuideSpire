package com.guidespire.controller.games;

import com.guidespire.model.games.Boss;
import com.guidespire.payload.ApiResponse;
import com.guidespire.service.games.BossService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bosses")
@CrossOrigin(origins = "*")
public class BossController {
    @Autowired
    private BossService service;

    //Create bosses
    @PostMapping
    public ResponseEntity<?> createBoss(@RequestBody Boss boss) {
        try {
            boolean isCreated = service.createBoss(boss);
            if (!isCreated) {
                return ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(
                                new ApiResponse<>(400, "Boss creation failed", false)
                        );
            }
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(
                            new ApiResponse<>(201, "Boss created", true)
                    );

        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Internal server error", null)
                    );
        }
    }

    // Get bosses by slug
    @GetMapping
    public ResponseEntity<?> getBosses(@RequestParam String slug) {
        try {
            List<Boss> bosses = service.getBosses(slug);
            if (bosses.isEmpty()) {
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponse<>(404, "No bosses found for the given slug", bosses));
            }

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(200, "Bosses fetched successfully", bosses));
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, "Internal server error", null));
        }
    }


}
