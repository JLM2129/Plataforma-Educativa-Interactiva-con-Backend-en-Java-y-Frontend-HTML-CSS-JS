package com.tuUsuario.ciencialoca.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import javax.xml.crypto.Data;
import java.util.Date;

@Entity
@Table(name = "usuario",uniqueConstraints = {@UniqueConstraint(columnNames = "email"),@UniqueConstraint(columnNames = "nombre")})
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String nombre;

    @NotBlank
    @Email
    @Column(unique = true)
    private String email;

    @NotBlank
    private String contraseña;

    @NotNull
    private Date fechaNacimiento;

    @NotBlank
    private String anoEscolar;

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public  Date getFechaNacimiento() {return fechaNacimiento;}

    public void setFechaNacimiento(Date fechaNacimiento) {this.fechaNacimiento = fechaNacimiento;}

    public String getAnoEscolar() {return anoEscolar;}

    public void setAnoEscolar(String anoEscolar) {this.anoEscolar = anoEscolar;}
}
