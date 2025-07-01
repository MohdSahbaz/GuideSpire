package com.guidespire.service.games;

import com.guidespire.model.games.Game;
import com.guidespire.projection.BannerSummary;
import com.guidespire.projection.GameSummary;
import com.guidespire.repository.games.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository repository;

    // *Home page*

    public List<BannerSummary> getBannerGames(){
        return repository.findAllByIsBannerTrue();
    }

    // Get Featured Games
    public List<GameSummary> getFeatureGames(){
        return repository.findAllByIsFeaturedTrue();
    }

    public List<GameSummary> getGamesSummary(){
        return repository.findAllBy();
    }

    public List<Game> getGames() {
        return repository.findAll();
    }

    public void createGame(Game game){
        repository.save(game);
    }

}
