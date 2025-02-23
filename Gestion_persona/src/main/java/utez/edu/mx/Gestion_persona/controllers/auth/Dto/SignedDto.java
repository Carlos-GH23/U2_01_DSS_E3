package utez.edu.mx.Gestion_persona.controllers.auth.Dto;

import lombok.Value;
import utez.edu.mx.Gestion_persona.models.dto.UserDto;
import utez.edu.mx.Gestion_persona.models.entity.RoleBean;

@Value
public class SignedDto {
    String token;
    String tokenType;
    UserDto user;
    RoleBean role;
}
