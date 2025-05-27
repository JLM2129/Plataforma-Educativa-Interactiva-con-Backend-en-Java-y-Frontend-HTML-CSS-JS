package com.tuUsuario.ciencialoca.entity;

import jakarta.persistence.*;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "subtemas")
public class Subtema {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    @Column(columnDefinition = "TEXT")
    private String descripcion;
    @Column(columnDefinition = "LONGTEXT")
    private String contenido;
    @ManyToOne
    @JoinColumn(name = "id_tema")
    private Tema tema;

}