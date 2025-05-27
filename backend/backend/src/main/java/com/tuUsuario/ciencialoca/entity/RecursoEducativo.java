package com.tuUsuario.ciencialoca.entity;


import jakarta.persistence.*;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "recursos_educativos")
public class RecursoEducativo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_subtema")
    private Long idSubtema;

    @Enumerated(EnumType.STRING)
    private TipoRecurso tipo;

    private String titulo;
    private String descripcion;
    private String url;



    public enum TipoRecurso {
        video, pdf
    }


}
