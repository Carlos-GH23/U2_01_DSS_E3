package utez.edu.mx.Gestion_persona.models.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class BitacoraBean {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String usuario;
    private String metodoHttp;
    private String endpoint;
    private LocalDateTime fechaHora;

    public BitacoraBean(String usuario, String metodoHttp, String endpoint, LocalDateTime fechaHora) {
        this.usuario = usuario;
        this.metodoHttp = metodoHttp;
        this.endpoint = endpoint;
        this.fechaHora = fechaHora;
    }

    public BitacoraBean() {
    }



}
