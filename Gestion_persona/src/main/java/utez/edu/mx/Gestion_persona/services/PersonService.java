package utez.edu.mx.Gestion_persona.services;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import utez.edu.mx.Gestion_persona.config.ApiResponse;
import utez.edu.mx.Gestion_persona.models.entity.PersonBean;
import utez.edu.mx.Gestion_persona.models.repository.PersonRepository;

import java.sql.SQLException;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class PersonService {
    private final PersonRepository repository;

    // Obtener todas las personas
    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> getAll() {
        return new ResponseEntity<>(
                new ApiResponse(repository.findAll(), HttpStatus.OK),
                HttpStatus.OK
        );
    }

    // Obtener una persona por su ID
    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> getOne(Integer id) {
        Optional<PersonBean> optionalPersonBean = repository.findById(id);
        if (optionalPersonBean.isPresent()) {
            PersonBean person = optionalPersonBean.get();
            return new ResponseEntity<>(
                    new ApiResponse(person, HttpStatus.OK),
                    HttpStatus.OK
            );
        } else {
            return new ResponseEntity<>(
                    new ApiResponse(HttpStatus.NOT_FOUND, true, "Persona no encontrada"),
                    HttpStatus.NOT_FOUND
            );
        }
    }

    // Guardar una nueva persona
    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> save(PersonBean person) {
        // Verifica si el correo ya está registrado
        if (repository.existsByEmail(person.getEmail())) {
            return new ResponseEntity<>(
                    new ApiResponse(HttpStatus.BAD_REQUEST, true, "El correo ya está registrado"),
                    HttpStatus.BAD_REQUEST
            );
        }
        // Guarda la persona
        return new ResponseEntity<>(
                new ApiResponse(repository.saveAndFlush(person), HttpStatus.OK),
                HttpStatus.OK
        );
    }

    // Actualizar una persona existente
    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> update(PersonBean person) {
        if (person.getId() == null) {
            return new ResponseEntity<>(
                    new ApiResponse(HttpStatus.BAD_REQUEST, true, "El ID no puede ser null"),
                    HttpStatus.BAD_REQUEST
            );
        }
        Optional<PersonBean> foundPerson = repository.findById(person.getId());
        if (foundPerson.isPresent()) {
            // Verifica si el correo ya está registrado por otra persona
            if (repository.existsByEmailAndIdNot(person.getEmail(), person.getId())) {
                return new ResponseEntity<>(
                        new ApiResponse(HttpStatus.BAD_REQUEST, true, "El correo ya está registrado por otra persona"),
                        HttpStatus.BAD_REQUEST
                );
            }
            // Actualiza la persona
            return new ResponseEntity<>(
                    new ApiResponse(repository.saveAndFlush(person), HttpStatus.OK),
                    HttpStatus.OK
            );
        } else {
            return new ResponseEntity<>(
                    new ApiResponse(HttpStatus.NOT_FOUND, true, "Persona no encontrada"),
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> delete(Integer id) {
        Optional<PersonBean> foundPerson = repository.findById(id);
        if (foundPerson.isPresent()) {
            repository.deleteById(id);
            return new ResponseEntity<>(
                    new ApiResponse(HttpStatus.OK, false, "Registro Eliminado"),
                    HttpStatus.OK
            );
        } else {
            return new ResponseEntity<>(
                    new ApiResponse(HttpStatus.NOT_FOUND, true, "Persona no encontrada"),
                    HttpStatus.NOT_FOUND
            );
        }
    }
}