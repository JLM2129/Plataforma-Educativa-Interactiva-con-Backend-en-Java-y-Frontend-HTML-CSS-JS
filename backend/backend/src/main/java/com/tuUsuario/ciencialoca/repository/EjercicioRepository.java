package com.tuUsuario.ciencialoca.repository;


import com.tuUsuario.ciencialoca.entity.Ejercicio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EjercicioRepository extends JpaRepository<Ejercicio, Long> {
    List<Ejercicio> findBySubtemaId(Long subtemaId);
}

