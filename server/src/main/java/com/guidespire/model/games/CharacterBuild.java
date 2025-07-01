package com.guidespire.model.games;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "characterBuilds")
public class CharacterBuild {

    @Id
    private String id;

    private String title;
    private String description;
    private String imageUrl;

    private List<String> weapons;       // e.g., ["Greatsword", "Magic Wand"]
    private List<String> skills;        // e.g., ["Fireball", "Shield Bash"]
    private List<String> accessories;   // e.g., ["Magic Ring", "Speed Boots"]

    private String role;                // e.g., "Tank", "DPS", "Support"
    private String strategy;            // How to use the build

    @DBRef
    private Character character;        // The character this build belongs to

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
