package ru.upmoover.taskorganizer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.upmoover.taskorganizer.entities.Project;
import ru.upmoover.taskorganizer.services.ProjectService;

@RestController
public class MainController {

    @Autowired
    ProjectService projectService;

    @PostMapping("/createProject")
    public ResponseEntity createProject(@RequestBody Project project) {
        projectService.save(project);
        return ResponseEntity.ok("dasdasdasd");
    }

    @GetMapping("/p1")
    public ResponseEntity creatfdsfeProject() {
        return ResponseEntity.ok("It works!");
    }
}
