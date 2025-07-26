package com.guidespire.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Slf4j
@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI apiInfo() {
        return new OpenAPI()
                .info(new Info()
                        .title("GuideSpire")
                        .description("GuideSpire Application")
                        .version("v1.0"))
                .tags(Arrays.asList(
                        new Tag().name("Game APIs"),
                        new Tag().name("Characters APIs"),
                        new Tag().name("Boss APIs"),
                        new Tag().name("Latest Guides APIs")
                ));
    }
}
