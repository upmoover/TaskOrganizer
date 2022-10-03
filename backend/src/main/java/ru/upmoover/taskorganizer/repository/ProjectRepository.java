package ru.upmoover.taskorganizer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.upmoover.taskorganizer.entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}
