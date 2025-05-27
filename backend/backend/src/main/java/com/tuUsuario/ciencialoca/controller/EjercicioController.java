package com.tuUsuario.ciencialoca.controller;


import com.tuUsuario.ciencialoca.entity.Ejercicio;
import com.tuUsuario.ciencialoca.entity.Juego;
import com.tuUsuario.ciencialoca.repository.EjercicioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ejercicios")
@CrossOrigin(origins = "*") // Permitir llamadas desde cualquier origen (ajusta según tus necesidades)
public class EjercicioController {

    @Autowired
    private EjercicioRepository ejercicioRepository;

    // Obtener todos los ejercicios por subtema
    @GetMapping("/{subtemaId}")
    public List<Ejercicio> obtenerEjerciciosPorSubtema(@PathVariable Long subtemaId) {
        return ejercicioRepository.findBySubtemaId(subtemaId);
    }

    // Crear un nuevo ejercicio (opcional, útil para pruebas o un panel admin)
    @PostMapping
    public ResponseEntity<Ejercicio> crearEjercicio(@RequestBody Ejercicio ejercicio) {
        if (ejercicio.getOpciones() == null || ejercicio.getOpciones().isEmpty()) {
            ejercicio.setOpciones("[]");
        }

        Ejercicio nuevoEjercicio = ejercicioRepository.save(ejercicio);
        return ResponseEntity.ok(nuevoEjercicio);
    }
}

