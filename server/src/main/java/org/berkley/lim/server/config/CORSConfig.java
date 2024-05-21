package org.berkley.lim.server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSConfig implements WebMvcConfigurer {
    // 이 설정은 CORS 설정 때문에 지정한 API 표시
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**").allowCredentials(true).allowedOriginPatterns("*").allowedHeaders("*")
                .allowedMethods("*").allowedOrigins("http://localhost:3000");
    }
}
