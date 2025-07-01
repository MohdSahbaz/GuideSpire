package com.guidespire.model.games;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "games")
public class Game {
    @Id
    private String id;

    @Indexed(unique = true)
    private String slug;

    private String title;
    private String description;
    private String image;

    private List<String> genres;
    private List<String> platforms;

    private boolean isBanner;
    private boolean isFeatured;

    @DBRef
    private List<Character> characters;

    @DBRef
    private List<TierList> tierLists;

    @DBRef
    private List<Guide> guides;

    @DBRef
    private List<Boss> bosses;


    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
