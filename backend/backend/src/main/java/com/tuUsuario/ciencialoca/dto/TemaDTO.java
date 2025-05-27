package com.tuUsuario.ciencialoca.dto;



import java.util.List;

public class TemaDTO {
    private Long id;
    private String nombre;
    private String url_imagen;
    private List<SubtemaDTO> subtemas;

    public TemaDTO(Long id, String nombre, String url_imagen, List<SubtemaDTO> subtemas) {
        this.id = id;
        this.nombre = nombre;
        this.url_imagen = url_imagen;
        this.subtemas = subtemas;
    }

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public List<SubtemaDTO> getSubtemas() { return subtemas; }
    public void setSubtemas(List<SubtemaDTO> subtemas) { this.subtemas = subtemas; }

    public String getUrl_imagen() {
        return url_imagen;
    }

    public void setUrl_imagen(String url_imagen) {
        this.url_imagen = url_imagen;
    }
}

