package com.guidespire.repository.games;

import com.guidespire.model.games.Boss;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BossRepository extends MongoRepository<Boss, String> {
    List<Boss> findAllByGameSlug(String slug);
}
