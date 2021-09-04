package com.hasindu.application.frameworks.tourplanner.service;

import com.hasindu.application.frameworks.tourplanner.dto.TourDTO;
import com.hasindu.application.frameworks.tourplanner.entity.Tour;
import com.hasindu.application.frameworks.tourplanner.repository.TourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class TourServiceImpl implements TourService {
    @Autowired
    private TourRepository tourRepository;

    @Override
    public List<TourDTO> findAll() {

        List<Tour>tempTourList = tourRepository.findAll();
        List<TourDTO> tempTourDTOList = new ArrayList<TourDTO>();
        for(Tour tempTour : tempTourList){
            tempTourDTOList.add(new TourDTO(tempTour.getId(),tempTour.getTitle(),tempTour.getIncluded(),tempTour.getNotIncluded(),tempTour.getPrice(),tempTour.getHotel(),tempTour.getRoute(),tempTour.getTitle(),tempTour.getImg()));

        }
        return tempTourDTOList;
    }

    @Override
    public void saveTour(TourDTO tourDTO) {
        tourRepository.save(new Tour(tourDTO.getId(),tourDTO.getDuration(),tourDTO.getIncluded(),tourDTO.getNotIncluded(),tourDTO.getPrice(),tourDTO.getHotel(),tourDTO.getRoute(),tourDTO.getTitle(),tourDTO.getImg()));

    }

    @Override
    public TourDTO findTourByTitle(String title) {
        Tour tempTour = tourRepository.findByTitle(title).get(0);
        return  new TourDTO(tempTour.getId(),tempTour.getTitle(),tempTour.getIncluded(),tempTour.getNotIncluded(),tempTour.getPrice(),tempTour.getHotel(),tempTour.getRoute(),tempTour.getTitle(),tempTour.getImg());

    }

    @Override
    public List<TourDTO> findAllTours(String id) {
        List<Tour>tempTourList = tourRepository.findAll();
        List<TourDTO> tempTourDTOList = new ArrayList<TourDTO>();
        for(Tour tempTour : tempTourList){
            tempTourDTOList.add(new TourDTO(tempTour.getId(),tempTour.getDuration(),tempTour.getIncluded(),tempTour.getNotIncluded(),tempTour.getPrice(),tempTour.getHotel(),tempTour.getRoute(),tempTour.getTitle(),tempTour.getImg()));

        }
        List<TourDTO> AllUserPayment = new ArrayList<TourDTO>();
        for(TourDTO tempTourDTO:tempTourDTOList){
            if(tempTourDTO.getId().equals(id)){
                tempTourDTOList.add(tempTourDTO);
            }
        }

        return tempTourDTOList;
    }

    @Override
    public void deleteTourByTitle(String title) {
        tourRepository.deleteByTitle(title);
    }
}
