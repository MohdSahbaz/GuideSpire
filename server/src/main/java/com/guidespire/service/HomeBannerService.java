package com.guidespire.service;

import com.guidespire.model.HomeBanner;
import com.guidespire.repository.HomeBannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeBannerService {
    @Autowired
    private HomeBannerRepository repository;

    public List<HomeBanner> getAllBannerImages() {
        return repository.findAll();
    }

    public HomeBanner createHomeBannerImage(HomeBanner banner){
        return repository.save(banner);
    }
}
