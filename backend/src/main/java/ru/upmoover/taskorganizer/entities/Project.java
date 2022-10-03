package ru.upmoover.taskorganizer.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    @JsonProperty("name")
    private String name;
    @Column(name = "description")
    @JsonProperty("description")
    private String description;
    @Column(name = "comment")
    @JsonProperty("comment")
    private String comment;
}
