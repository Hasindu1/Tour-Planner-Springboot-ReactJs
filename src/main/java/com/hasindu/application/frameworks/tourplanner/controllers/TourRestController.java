package com.hasindu.application.frameworks.tourplanner.controllers;

import com.hasindu.application.frameworks.tourplanner.dto.TourDTO;
import com.hasindu.application.frameworks.tourplanner.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tours-api")
public class TourRestController {

    @Autowired
    private TourService tourService;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/tours")
    public List<TourDTO> getAllTours(){

        return (tourService.findAll());
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/tours")
    public TourDTO saveTour(@RequestBody TourDTO tourDTO){

        tourService.saveTour(tourDTO);
        System.out.println(tourDTO);
        System.out.println("Yes it came");

        return tourDTO;


    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/tours/{id}")
    public TourDTO findByTitle(@PathVariable String title){
        if(tourService.findTourByTitle(title) != null){
            return tourService.findTourByTitle(title);
        }
        else{
            throw new RuntimeException("Tour  not found " + title);
        }
    }
     @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/tours/{title}")
    public String DeleteTourByTitle(@PathVariable String title){
        if(tourService.findTourByTitle(title) != null){
            tourService.deleteTourByTitle(title);
            return "Tour id: " + title + "Successfully deleted " ;
        }
        else{
            return  "Tour not available ";
        }
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/tours")
    public TourDTO updateTourDTO(@RequestBody TourDTO tourDTO){
        tourService.saveTour(tourDTO);
        return tourDTO;
    }

}
