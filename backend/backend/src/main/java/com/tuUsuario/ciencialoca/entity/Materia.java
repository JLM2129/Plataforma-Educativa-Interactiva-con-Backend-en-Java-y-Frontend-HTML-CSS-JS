package com.tuUsuario.ciencialoca.entity;

import jakarta.persistence.*;

import java.util.List;
import lombok.*;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "materias")
public class Materia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    @OneToMany(mappedBy = "materia",cascade = CascadeType.ALL)
    private List<Tema> temas;


}
