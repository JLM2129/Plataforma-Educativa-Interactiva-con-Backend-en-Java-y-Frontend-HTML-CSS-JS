// controller/AuthController.java
package com.tuUsuario.ciencialoca.controller;

import com.tuUsuario.ciencialoca.dto.LoginDTO;
import com.tuUsuario.ciencialoca.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody LoginDTO dto) {
        return authService.login(dto);
    }
}
