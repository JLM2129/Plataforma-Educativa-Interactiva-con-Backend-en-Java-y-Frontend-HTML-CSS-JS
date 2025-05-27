// src/main/java/com/tuUsuario/ciencialoca/service/AuthService.java
package com.tuUsuario.ciencialoca.service;

import com.tuUsuario.ciencialoca.config.JwtConfig;
import com.tuUsuario.ciencialoca.dto.LoginDTO;
import com.tuUsuario.ciencialoca.entity.Usuario;
import com.tuUsuario.ciencialoca.repository.UsuarioRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;


@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtConfig jwtConfig;

    public String login(LoginDTO dto) {
        Usuario usuario = usuarioRepository.findByEmail(dto.getEmail())
                .orElse(null);

        if (usuario == null) {
            throw new RuntimeException("Usuario no encontrado: " + dto.getEmail());
        }

        if (!passwordEncoder.matches(dto.getContraseña(), usuario.getContraseña())) {
            throw new RuntimeException("Contraseña incorrecta para el usuario: " + dto.getEmail());
        }

        System.out.println("CLAVE JWT DESDE PROPERTIES >>> " + jwtConfig.getJwtSecret());

        System.out.println("LONGITUD CLAVE >>> " + jwtConfig.getJwtSecret().length());

        Key secretKey = Keys.hmacShaKeyFor(jwtConfig.getJwtSecret().getBytes(StandardCharsets.UTF_8));


        return Jwts.builder()
                .setSubject(usuario.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();


    }
    }