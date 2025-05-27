package com.tuUsuario.ciencialoca.repository;



import com.tuUsuario.ciencialoca.entity.Subtema;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubtemaRepositorio extends JpaRepository<Subtema, Long> {
    List<Subtema> findByTemaId(Long temaId);
}

