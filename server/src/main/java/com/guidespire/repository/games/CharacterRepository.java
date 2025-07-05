package com.guidespire.repository.games;

import com.guidespire.model.games.Character;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CharacterRepository extends MongoRepository<Character, String> {
    List<Character> findAllByGameSlug(String slug);
}
