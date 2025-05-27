package com.tuUsuario.ciencialoca.service;

import com.tuUsuario.ciencialoca.dto.RegistroUsuarioDTO;
import com.tuUsuario.ciencialoca.entity.Usuario;
import com.tuUsuario.ciencialoca.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario registrar(RegistroUsuarioDTO dto) {
        if (usuarioRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Ya existe un usuario con este email");
        }

        Usuario usuario = new Usuario();
        usuario.setNombre(dto.getNombre());
        usuario.setEmail(dto.getEmail());
        usuario.setContraseña(passwordEncoder.encode(dto.getContraseña()));
        usuario.setFechaNacimiento((Date) dto.getFechaNacimiento());
        usuario.setAnoEscolar(dto.getAnoEscolar());
        return usuarioRepository.save(usuario);
    }
}


