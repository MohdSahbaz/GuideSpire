package com.guidespire.service.games;

import com.guidespire.model.games.Game;
import com.guidespire.projection.BannerSummary;
import com.guidespire.projection.GameSummary;
import com.guidespire.repository.games.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository repository;

    // *Home page*
    // Get banner games
    public List<BannerSummary> getBannerGames(){
        return repository.findAllByIsBannerTrue();
    }

    // Get Featured Games
    public List<GameSummary> getFeatureGames(){
        return repository.findAllByIsFeaturedTrue();
    }

    // Get all games summary
    public List<GameSummary> getGamesSummary(String slug){
        if(slug == null || slug.trim().isEmpty()){
            return repository.findAllBy();
        }
        return repository.findBySlugContainingIgnoreCase(slug.trim());
    }

    // Get all games
    public List<Game> getGames() {
        return repository.findAll();
    }

    // Get single game
    public Game getGameBySlug(String slug){
        return repository.findBySlug(slug);
    }

    // Create game
    public void createGame(Game game){
        repository.save(game);
    }

}
