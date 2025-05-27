package com.tuUsuario.ciencialoca.controller;




import com.tuUsuario.ciencialoca.entity.RecursoEducativo;
import com.tuUsuario.ciencialoca.repository.RecursoEducativoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recursos")
@CrossOrigin(origins = "*")
public class RecursoEducativoController {

    @Autowired
    private RecursoEducativoRepository recursoRepo;

    @GetMapping("/subtema/{idSubtema}")
    public List<RecursoEducativo> obtenerRecursosPorSubtema(@PathVariable Long idSubtema) {
        return recursoRepo.findByIdSubtema(idSubtema);
    }
}

