package utez.edu.mx.Gestion_persona.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.Gestion_persona.config.ApiResponse;
import utez.edu.mx.Gestion_persona.models.entity.PersonBean;
import utez.edu.mx.Gestion_persona.services.PersonService;

@RestController
@CrossOrigin
@RequestMapping("/api/personas")
@Validated
public class PersonaController {

    @Autowired
    private PersonService personService;

    @GetMapping
    public ResponseEntity<ApiResponse> getAllPersons() {
        return personService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getPersonById(@PathVariable Integer id) {
        return personService.getOne(id);
    }

    @PostMapping("crear")
    public ResponseEntity<ApiResponse> createPerson(@RequestBody PersonBean person) {
        return personService.save(person);
    }

    @PutMapping("/modificar/{id}")
    public ResponseEntity<ApiResponse> updatePerson(@PathVariable Integer id, @RequestBody PersonBean person) {
        person.setId(id); // Asegura que el ID de la persona sea el mismo que el proporcionado en la URL
        return personService.update(person);
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<ApiResponse> deletePerson(@PathVariable Integer id) {
        return personService.delete(id);
    }
}