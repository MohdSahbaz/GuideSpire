package com.guidespire.repository.home;

import com.guidespire.model.home.HomeBanner;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HomeBannerRepository extends MongoRepository<HomeBanner, String> {
}
