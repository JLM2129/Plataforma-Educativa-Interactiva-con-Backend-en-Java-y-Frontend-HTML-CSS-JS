package com.tuUsuario.ciencialoca.entity;

import jakarta.persistence.*;
import lombok.*;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "juegos")
public class Juego {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo; // Ej: "arrastrar", "contrarreloj"
    private String titulo;
    private String descripcion;
    private Long orden;
    @Lob
    @Column(name = "data_json",columnDefinition = "json")
    private String dataJson; // Puede contener JSON con la lógica del juego

    private Long subtemaId;
    private String script_url;

    @PrePersist
    @PreUpdate
    public void preGuardar() {
        if (this.dataJson == null || this.dataJson.isEmpty()) {
            this.dataJson = "{\"pares\":[]}";
        }
    }



}

