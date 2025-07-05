package com.guidespire.service.games;

import com.guidespire.model.games.Boss;
import com.guidespire.repository.games.BossRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BossService {
    @Autowired
    private BossRepository repository;

    // Create boss of game
    public boolean createBoss(Boss boss){
        try{
            repository.save(boss);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    // Get bosses by slug
    public List<Boss> getBosses(String slug){
        return repository.findAllByGameSlug(slug);
    }

}
