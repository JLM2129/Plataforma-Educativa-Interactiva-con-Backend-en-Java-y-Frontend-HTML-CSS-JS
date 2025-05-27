package com.tuUsuario.ciencialoca.controller;



import com.tuUsuario.ciencialoca.dto.SubtemaDTO;
import com.tuUsuario.ciencialoca.dto.TemaDTO;
import com.tuUsuario.ciencialoca.entity.Tema;
import com.tuUsuario.ciencialoca.repository.SubtemaRepositorio;
import com.tuUsuario.ciencialoca.repository.TemaRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/temas")
public class TemaController {

    @Autowired
    private TemaRepositorio temaRepositorio;

    @Autowired
    private SubtemaRepositorio subtemaRepositorio;

    @GetMapping("/{id}")
    public ResponseEntity<TemaDTO> getTemaConSubtemas(@PathVariable Long id) {
        Tema tema = temaRepositorio.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        List<SubtemaDTO> subtemas = subtemaRepositorio.findByTemaId(id)
                .stream()
                .map(sub -> new SubtemaDTO(sub.getId(), sub.getNombre(), sub.getDescripcion()))
                .collect(Collectors.toList());

        TemaDTO dto = new TemaDTO(tema.getId(), tema.getNombre(), tema.getUrl_imagen(), subtemas);
        return ResponseEntity.ok(dto);
    }



}

