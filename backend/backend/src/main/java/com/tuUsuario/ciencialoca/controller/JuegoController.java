package com.tuUsuario.ciencialoca.controller;


import com.tuUsuario.ciencialoca.entity.Juego;
import com.tuUsuario.ciencialoca.repository.JuegoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/juegos")
@CrossOrigin(origins = "*")
public class JuegoController {

    @Autowired
    private JuegoRepository juegoRepository;

    @GetMapping("/{subtemaId}")
    public List<Juego> obtenerJuegosPorSubtema(@PathVariable Long subtemaId) {
        return juegoRepository.findBySubtemaId(subtemaId);
    }

    @PostMapping
    public ResponseEntity<Juego> crearJuego(@RequestBody Juego juego) {
        if (juego.getDataJson() == null || juego.getDataJson().isEmpty()) {
            juego.setDataJson("[]");
        }

        Juego nuevoJuego = juegoRepository.save(juego);
        return ResponseEntity.ok(nuevoJuego);
    }

}

