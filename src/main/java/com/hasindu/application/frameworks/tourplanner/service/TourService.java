package com.hasindu.application.frameworks.tourplanner.service;

import com.hasindu.application.frameworks.tourplanner.dto.TourDTO;

import java.util.List;

public interface TourService {
    public List<TourDTO> findAll();
    public void saveTour(TourDTO tourDTO);
    public TourDTO findTourByTitle(String id);
    public List<TourDTO> findAllTours(String id);
    public void deleteTourByTitle(String title);
}
