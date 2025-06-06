package com.tuUsuario.ciencialoca.repository;


import com.tuUsuario.ciencialoca.entity.Juego;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JuegoRepository extends JpaRepository<Juego, Long> {
    List<Juego> findBySubtemaId(Long subtemaId);
}
