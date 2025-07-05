package com.guidespire.service.games;

import com.guidespire.model.games.Character;
import com.guidespire.repository.games.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {

    @Autowired
    private CharacterRepository repository;

    // get characters by slug
    public List<Character> getAllCharacterBySlug(String slug) {
        return repository.findAllByGameSlug(slug);
    }

    // Create character
    public boolean createCharacter(Character character) {
        try {
            repository.save(character);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
