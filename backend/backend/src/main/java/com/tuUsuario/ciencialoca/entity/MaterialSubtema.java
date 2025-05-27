package com.tuUsuario.ciencialoca.entity;

import jakarta.persistence.*;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "materiales_subtema")
public class MaterialSubtema {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;        // 'texto', 'imagen', 'video', etc.

    @Column(name = "url_imagen")
    private String urlImagen;

    @Lob
    private String contenido;

    @ManyToOne
    @JoinColumn(name = "id_subtema")
    private Subtema subtema;


}
