package com.tuUsuario.ciencialoca.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ejercicios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ejercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo; // Por ejemplo: "seleccion", "completar", etc.
    private String pregunta;
    private String respuesta_correcta;
    @Lob
    @Column(name = "opciones",columnDefinition = "json")
    private String opciones; // Aquí se almacena el JSON con las opciones o el contenido interactivo.

    private Long subtemaId;

    @PrePersist
    @PreUpdate
    public void preGuardar() {
        if (this.opciones == null || this.opciones.isEmpty()) {
            this.opciones= "{\"opciones\":[],\"respuestaCorrecta\":\"\"}";
        }
    }
}
