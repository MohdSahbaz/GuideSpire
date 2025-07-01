package com.guidespire.model.games;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "guides")
public class Guide {
    @Id
    private String id;

    private String title;
    private String content;
    private String author;

    private LocalDateTime createdAt;
}
