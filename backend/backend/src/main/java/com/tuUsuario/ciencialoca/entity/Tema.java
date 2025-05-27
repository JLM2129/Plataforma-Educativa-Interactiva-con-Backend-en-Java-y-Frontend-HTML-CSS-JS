package com.tuUsuario.ciencialoca.entity;

import jakarta.persistence.*;

import java.util.List;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "temas")
public class Tema {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    @Column(name = "imagen")
    private String url_imagen;
    @ManyToOne
    @JoinColumn(name = "id_materia")
    private Materia materia;
    @OneToMany(mappedBy = "tema", cascade = CascadeType.ALL)
    private List<Subtema> subtemas;


}