package com.tuUsuario.ciencialoca.controller;

import com.tuUsuario.ciencialoca.dto.RegistroUsuarioDTO;
import com.tuUsuario.ciencialoca.entity.Usuario;
import com.tuUsuario.ciencialoca.repository.UsuarioRepository;
import com.tuUsuario.ciencialoca.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/registro")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        try {
            if (usuarioRepository.existsByEmail(usuario.getEmail())) {
                return ResponseEntity
                        .badRequest()
                        .body("El correo ya está registrado");
            }

            if (usuarioRepository.existsByNombre(usuario.getNombre())) {
                return ResponseEntity
                        .badRequest()
                        .body("El nombre de usuario ya está registrado");
            }

            usuario.setContraseña(passwordEncoder.encode(usuario.getContraseña()));
            usuarioRepository.save(usuario);

            return ResponseEntity.ok("Usuario registrado");
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al registrar el usuario: " + e.getMessage());
        }
    }



}
