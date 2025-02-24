package utez.edu.mx.Gestion_persona.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import utez.edu.mx.Gestion_persona.config.ApiResponse;
import utez.edu.mx.Gestion_persona.services.BitacoraService;

@RestController
@RequestMapping("/api/bitacora")
@Validated
public class BitacoraController {
    @Autowired
    private BitacoraService service;

    @GetMapping
    public ResponseEntity<ApiResponse> getAllregister() {
        return service.getAll();
    }
}
