package com.guidespire.repository.games;

import com.guidespire.model.games.Game;
import com.guidespire.projection.BannerSummary;
import com.guidespire.projection.GameSummary;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GameRepository extends MongoRepository<Game, String> {

    // All games
    List<GameSummary> findAllBy();

    // Featured Games
    List<GameSummary> findAllByIsFeaturedTrue();

    // Banner Images
    List<BannerSummary> findAllByIsBannerTrue();

    // Find single game
    Game findBySlug(String slug);
}
