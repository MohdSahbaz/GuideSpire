package com.guidespire.repository;

import com.guidespire.model.HomeBanner;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HomeBannerRepository extends MongoRepository<HomeBanner, String> {
}
