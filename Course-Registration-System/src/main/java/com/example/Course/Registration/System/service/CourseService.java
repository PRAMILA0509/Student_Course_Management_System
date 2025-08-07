package com.example.Course.Registration.System.service;

import com.example.Course.Registration.System.model.Course;
import com.example.Course.Registration.System.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@Service
public class CourseService {

    @Autowired
    CourseRepo courseRepo;
    public List<Course>  availableCourses() {
        return courseRepo.findAll();
    }
}
