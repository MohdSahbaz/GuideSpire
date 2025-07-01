package com.guidespire.repository.home;

import com.guidespire.model.home.LatestGuides;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LatestGuidesRepository extends MongoRepository<LatestGuides, String> {
}
