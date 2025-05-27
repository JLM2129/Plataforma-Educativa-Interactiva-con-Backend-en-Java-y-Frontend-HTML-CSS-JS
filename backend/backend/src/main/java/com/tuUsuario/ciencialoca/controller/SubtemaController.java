package com.tuUsuario.ciencialoca.controller;

import com.tuUsuario.ciencialoca.dto.SubtemaDTO;
import com.tuUsuario.ciencialoca.entity.Subtema;
import com.tuUsuario.ciencialoca.repository.SubtemaRepositorio;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/subtemas")
public class SubtemaController {

    private final SubtemaRepositorio repository;

    public SubtemaController(SubtemaRepositorio repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubtemaDTO> obtenerSubtema(@PathVariable Long id) {
        Subtema sub = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return ResponseEntity.ok(new SubtemaDTO(sub.getId(), sub.getNombre(), sub.getDescripcion()));
    }
}