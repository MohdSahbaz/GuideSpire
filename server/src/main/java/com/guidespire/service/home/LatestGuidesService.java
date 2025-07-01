package com.guidespire.service;

import com.guidespire.model.LatestGuides;
import com.guidespire.repository.LatestGuidesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LatestGuidesService {

    @Autowired
    private LatestGuidesRepository repository;

    public List<LatestGuides> getAllLatestGuides() {
        return repository.findAll();
    }

    public LatestGuides createLatestGuide(LatestGuides guide) {
        return repository.save(guide);
    }

}
