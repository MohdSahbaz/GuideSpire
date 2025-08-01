package com.guidespire.controller.games;

import com.guidespire.model.games.Game;
import com.guidespire.payload.ApiResponse;
import com.guidespire.projection.BannerSummary;
import com.guidespire.projection.GameSummary;
import com.guidespire.service.games.GameService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/game")
@CrossOrigin(origins = "*")
@Tag(name = "Game APIs")
public class GameController {
    @Autowired
    private GameService service;

    // Home page Api
    // Banner games
    @GetMapping("/banner-games")
    @Operation(summary = "Get banner games", description = "Fetch banner games by calling api")
    public ResponseEntity<?> getBannerGames() {
        try {
            List<BannerSummary> bannerGames = service.getBannerGames();
            if (bannerGames.isEmpty()) {
                return ResponseEntity
                        .ok(
                                new ApiResponse<>(200, "No banner games available.", bannerGames)
                        );
            }

            return ResponseEntity
                    .ok(
                            new ApiResponse<>(200, "Banner games fetched successfully.", bannerGames)
                    );
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Internal server error", null)
                    );
        }
    }


    // Featured games
    @GetMapping("/featured-games")
    public ResponseEntity<?> getFeatureGames() {
        try {
            List<GameSummary> featureGames = service.getFeatureGames();
            if (featureGames.isEmpty()) {
                return ResponseEntity
                        .ok(
                                new ApiResponse<>(200, "No featured games available.", featureGames)
                        );
            }

            return ResponseEntity
                    .ok(
                            new ApiResponse<>(200, "Feature games fetched successfully.", featureGames)
                    );
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Internal server error", null)
                    );
        }
    }

    // Get all games summary and search by slug
    @GetMapping("/summary")
    public ResponseEntity<?> getGamesSummary(@RequestParam(required = false) String slug) {
        try {
            List<GameSummary> summaries = service.getGamesSummary(slug);
            if (summaries.isEmpty()) {
                return ResponseEntity
                        .ok(
                                new ApiResponse<>(200, "No games available.", summaries)
                        );
            }

            return ResponseEntity
                    .ok(
                            new ApiResponse<>(200, "Game summary fetched successfully.", summaries)
                    );
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Internal server error", null)
                    );
        }
    }

    // Get all games
    @GetMapping
    public ResponseEntity<?> getGames() {
        try {
            List<Game> games = service.getGames();
            if (games.isEmpty()) {
                return ResponseEntity
                        .ok(
                                new ApiResponse<>(200, "No games available.", games)
                        );
            }

            return ResponseEntity
                    .ok(
                            new ApiResponse<>(200, "Games fetched successfully.", games)
                    );
        } catch (Exception e) {
            System.out.println("Failed to fetch games: " + e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Failed to fetch games", null)
                    );
        }
    }

    // Get single game by slug
    @GetMapping("/{slug}")
    public ResponseEntity<?> getGame(@PathVariable String slug) {
        try {
           Game game = service.getGameBySlug(slug);
            if (game == null) {
                return ResponseEntity
                        .ok(
                                new ApiResponse<>(204, "Game not found.", null)
                        );
            }

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(
                            new ApiResponse<>(200, "You found me nice!", game)
                    );
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Internal server error", null)
                    );
        }
    }

    // Add new game
    @PostMapping
    public ResponseEntity<?> createGame(@RequestBody Game game) {
        try {
            service.createGame(game);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(
                            new ApiResponse<>(201, "Game created successfully.", null)
                    );
        } catch (Exception e) {
            System.out.println("Failed to create game: " + e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            new ApiResponse<>(500, "Failed to create game", null)
                    );
        }
    }

}
