package utez.edu.mx.Gestion_persona.controllers.auth;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.Gestion_persona.config.ApiResponse;
import utez.edu.mx.Gestion_persona.controllers.auth.Dto.SignDto;
import utez.edu.mx.Gestion_persona.services.auth.AuthService;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"*"})
public class AuthController {
    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/signin")
    public ResponseEntity<ApiResponse> signIn(@RequestBody SignDto dto) {
        return service.signIn(dto.getUsuario(), dto.getContrasenia());
    }
}

