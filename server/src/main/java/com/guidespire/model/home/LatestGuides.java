package com.guidespire.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "latest-guides")
public class LatestGuides {
    @Id
    private String id;

    @NotBlank(message = "Game name is required")
    private String name;

    @NotBlank(message = "Title is required")
    @Size(max = 100, message = "Title cannot exceed 100 characters")
    private String title;

    @NotBlank(message = "Description is required")
    @Size(max = 500)
    private String description;

    @NotBlank(message = "Image URL is required")
    private String image;

    @NotBlank(message = "Slug is required")
    private String slug;
}
