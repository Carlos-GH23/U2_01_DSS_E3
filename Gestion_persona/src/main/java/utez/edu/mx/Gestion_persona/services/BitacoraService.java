package utez.edu.mx.Gestion_persona.services;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import utez.edu.mx.Gestion_persona.config.ApiResponse;
import utez.edu.mx.Gestion_persona.models.repository.BitacoraRepository;

@Service
@Transactional
@AllArgsConstructor
public class BitacoraService {

    private final BitacoraRepository repository;

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> getAll() {
        return new ResponseEntity<>(
                new ApiResponse(repository.findAll(), HttpStatus.OK),
                HttpStatus.OK
        );
    }
}
