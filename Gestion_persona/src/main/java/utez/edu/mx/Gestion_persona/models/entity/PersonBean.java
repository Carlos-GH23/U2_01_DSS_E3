package utez.edu.mx.Gestion_persona.models.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@ToString
@Table(name = "Persona")
public class PersonBean {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nombre", nullable = false)
    private String name;

    @Column(name = "correo", nullable = false)
    private String email;

    @Column(name = "telefono", nullable = false)
    private String telefono;

    @Column(name = "edad", nullable = false)
    private int age;
}
