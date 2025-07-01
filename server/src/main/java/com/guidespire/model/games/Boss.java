package com.guidespire.model.games;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "bosses")
public class Boss {
    @Id
    private String id;

    private String name;
    private String description;
    private String imageUrl;
    private int difficultyLevel; // 1-10
}
