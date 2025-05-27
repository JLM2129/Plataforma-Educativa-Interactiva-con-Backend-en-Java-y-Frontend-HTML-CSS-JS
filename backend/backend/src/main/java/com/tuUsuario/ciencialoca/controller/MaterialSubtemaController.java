package com.tuUsuario.ciencialoca.controller;

import com.tuUsuario.ciencialoca.dto.MaterialSubtemaDTO;
import com.tuUsuario.ciencialoca.entity.MaterialSubtema;
import com.tuUsuario.ciencialoca.repository.MaterialSubtemaRepositorio;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/materiales")
public class MaterialSubtemaController {

    private final MaterialSubtemaRepositorio repository;

    public MaterialSubtemaController(MaterialSubtemaRepositorio repository) {
        this.repository = repository;
    }

    @GetMapping("/subtema/{id}")
    public List<MaterialSubtemaDTO> obtenerMaterialesPorSubtema(@PathVariable Long id) {
        List<MaterialSubtema>materialSubtemas = repository.findBySubtemaId(id);
        return materialSubtemas.stream()
                .map(mat -> new MaterialSubtemaDTO(mat.getId(), mat.getTipo(), mat.getUrlImagen(), mat.getContenido()))
                .collect(Collectors.toList());
    }
}
