package com.hasindu.application.frameworks.tourplanner.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document("Tour")
public class Tour {
    @Id
    private String id;
    private String duration;
    private String included;
    private String notIncluded;
    private double price;
    private String hotel;
    private String route;
    private String title;
    private  String img;

    public Tour() {
    }


    public Tour(String id, String duration, String included, String notIncluded, double price, String hotel, String route, String title,String img) {
        this.id = id;
        this.duration = duration;
        this.included = included;
        this.notIncluded = notIncluded;
        this.price = price;
        this.hotel = hotel;
        this.route = route;
        this.title = title;
        this.img = img;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getIncluded() {
        return included;
    }

    public void setIncluded(String included) {
        this.included = included;
    }

    public String getNotIncluded() {
        return notIncluded;
    }

    public void setNotIncluded(String notIncluded) {
        this.notIncluded = notIncluded;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getHotel() {
        return hotel;
    }

    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tour tour = (Tour) o;
        return Objects.equals(id, tour.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Tour{" +
                "id='" + id + '\'' +
                ", duration='" + duration + '\'' +
                ", included='" + included + '\'' +
                ", notIncluded='" + notIncluded + '\'' +
                ", price=" + price +
                ", hotel='" + hotel + '\'' +
                ", route='" + route + '\'' +
                ", title='" + title + '\'' +
                ", img='" + img + '\'' +
                '}';
    }
}
