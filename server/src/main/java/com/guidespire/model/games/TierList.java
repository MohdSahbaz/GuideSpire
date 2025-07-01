package com.guidespire.model.games;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "tierLists")
public class TierList {
    @Id
    private String id;

    private String title;
    private String description;

    private List<String> tiers; // e.g., ["S", "A", "B"]

    @DBRef
    private List<Character> characterIds;
}
