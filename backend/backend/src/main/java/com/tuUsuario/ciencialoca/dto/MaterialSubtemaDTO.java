package com.tuUsuario.ciencialoca.dto;


public class MaterialSubtemaDTO {
    private Long id;
    private String tipo;
    private String urlImagen;
    private String contenido;
    public MaterialSubtemaDTO(Long id, String tipo, String urlImagen, String contenido) {
        this.id = id;
        this.tipo = tipo;
        this.urlImagen = urlImagen;
        this.contenido = contenido;
    }

    public Long getId() {
        return id;
    }

    public String getTipo() {
        return tipo;
    }
    public String getUrlImagen() {
        return urlImagen;
    }
    public String getContenido() {
        return contenido;
    }




}
