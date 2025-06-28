package com.guidespire.service;

import com.guidespire.model.FeaturedGame;
import com.guidespire.repository.FeaturedGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeaturedGameService {

    @Autowired
    private FeaturedGameRepository repository;

    public List<FeaturedGame> getAllFeaturedGames(){
        return repository.findAll();
    }

    public FeaturedGame createFeaturedGames(FeaturedGame game){
        return repository.save(game);
    }

}
