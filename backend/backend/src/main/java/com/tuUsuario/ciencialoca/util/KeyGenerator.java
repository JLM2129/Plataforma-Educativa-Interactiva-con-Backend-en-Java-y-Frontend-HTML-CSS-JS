package com.tuUsuario.ciencialoca.util;

import io.jsonwebtoken.security.Keys;
import java.util.Base64;

public class KeyGenerator {
    public static void main(String[] args) {
        // Genera una clave segura (por defecto es de 256 bits para HS256)
        byte[] keyBytes = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256).getEncoded();

        // La codificamos en base64 para guardarla como texto
        String base64Key = Base64.getEncoder().encodeToString(keyBytes);

        System.out.println("Clave segura JWT (usa esto en application.properties):");
        System.out.println(base64Key);
    }
}

