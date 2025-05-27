package com.tuUsuario.ciencialoca.repository;




import com.tuUsuario.ciencialoca.entity.RecursoEducativo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RecursoEducativoRepository extends JpaRepository<RecursoEducativo, Long> {
    List<RecursoEducativo> findByIdSubtema(Long idSubtema);
}

