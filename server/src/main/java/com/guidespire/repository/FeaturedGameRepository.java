package com.guidespire.repository;

import com.guidespire.model.FeaturedGame;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeaturedGameRepository extends MongoRepository<FeaturedGame, String> {

}
