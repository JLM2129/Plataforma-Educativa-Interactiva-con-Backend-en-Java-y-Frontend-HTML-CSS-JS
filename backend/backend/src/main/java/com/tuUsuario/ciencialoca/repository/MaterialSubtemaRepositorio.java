package com.tuUsuario.ciencialoca.repository;

import com.tuUsuario.ciencialoca.entity.MaterialSubtema;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MaterialSubtemaRepositorio extends JpaRepository<MaterialSubtema, Long> {
    List<MaterialSubtema> findBySubtemaId(Long subtemaId);
}


