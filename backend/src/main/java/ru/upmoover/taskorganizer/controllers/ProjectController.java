package ru.upmoover.taskorganizer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.upmoover.taskorganizer.entities.Project;
import ru.upmoover.taskorganizer.services.ProjectService;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @PostMapping("/create")
    public ResponseEntity createProject(@RequestBody Project project) {
        projectService.save(project);
        return ResponseEntity.ok("");
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Project>> getAllProjects() {
            return ResponseEntity.ok(projectService.getAllProjects());
    }
}
