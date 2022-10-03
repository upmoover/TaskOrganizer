package ru.upmoover.taskorganizer.services;

import ru.upmoover.taskorganizer.entities.Project;

import java.util.List;

public interface ProjectService {
    Project save(Project project);

    List<Project> getAllProjects();
}
