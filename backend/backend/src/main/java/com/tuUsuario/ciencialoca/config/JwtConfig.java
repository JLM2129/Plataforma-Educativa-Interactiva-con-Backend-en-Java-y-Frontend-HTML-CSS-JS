package com.tuUsuario.ciencialoca.config;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;



@Configuration
public class JwtConfig {

    @Autowired
    private Environment env;

    private String jwtSecret;

    @PostConstruct
    public void init() {
        jwtSecret = env.getProperty("jwt.secret");
        System.out.println("🔐 CLAVE JWT >>> " + jwtSecret);
        for (String name : env.getActiveProfiles()) {
            System.out.println("🧩 PERFIL ACTIVO >>> " + name);
        }

        jwtSecret = env.getProperty("jwt.secret");

    }

    public String getJwtSecret() {
        return jwtSecret;
    }
}
