package com.guidespire.repository;

import com.guidespire.model.LatestGuides;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LatestGuidesRepository extends MongoRepository<LatestGuides, String> {
}
