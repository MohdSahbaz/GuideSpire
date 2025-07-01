package com.guidespire.service.home;

import com.guidespire.model.home.HomeBanner;
import com.guidespire.repository.home.HomeBannerRepository;
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
