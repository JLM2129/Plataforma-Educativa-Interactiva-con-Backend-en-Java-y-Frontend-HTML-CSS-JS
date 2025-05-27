package com.tuUsuario.ciencialoca.dto;

import java.sql.Date;

public class RegistroUsuarioDTO {

    private String nombre;
    private String email;
    private String contraseña;



    private Date fechaNacimiento;
    private String anoEscolar;
    // Constructor vacío (necesario para @RequestBody)
    public RegistroUsuarioDTO() {}

    // Getters
    public String getNombre() {
        return nombre;
    }

    public String getEmail() {
        return email;
    }

    public String getContraseña() {
        return contraseña;
    }

    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public Date getFechaNacimiento() {
        return (Date) fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getAnoEscolar() {
        return anoEscolar;
    }

    public void setAnoEscolar(String anoEscolar) {
        this.anoEscolar = anoEscolar;
    }
}
