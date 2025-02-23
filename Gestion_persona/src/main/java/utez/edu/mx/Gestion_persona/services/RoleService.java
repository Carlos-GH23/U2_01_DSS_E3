package utez.edu.mx.Gestion_persona.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utez.edu.mx.Gestion_persona.models.dto.RoleDto;
import utez.edu.mx.Gestion_persona.models.entity.RoleBean;
import utez.edu.mx.Gestion_persona.models.repository.RoleRepository;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleDao;

    // Obtener todos los roles
    public List<RoleDto> getAllRoles() {
        return roleDao.findAll().stream()
                .map(role -> RoleDto.builder()
                        .id_role(role.getId_role())
                        .nombre(role.getName())
                        .build())
                .collect(Collectors.toList());
    }

    // Obtener rol por ID
    public Optional<RoleDto> getRoleById(Integer id) {
        return roleDao.findById(id)
                .map(role -> RoleDto.builder()
                        .id_role(role.getId_role())
                        .nombre(role.getName())
                        .build());
    }

    // Crear rol
    public RoleDto saveRole(RoleDto roleDto) {
        RoleBean role = new RoleBean();
        role.setName(roleDto.getNombre());
        roleDao.save(role);

        return RoleDto.builder()
                .id_role(role.getId_role())
                .nombre(role.getName())
                .build();
    }

    // Actualizar rol
    public Optional<RoleDto> updateRole(Integer id, RoleDto roleDto) {
        return roleDao.findById(id)
                .map(role -> {
                    role.setName(roleDto.getNombre());
                    roleDao.save(role);
                    return RoleDto.builder()
                            .id_role(role.getId_role())
                            .nombre(role.getName())
                            .build();
                });
    }

    // Eliminar rol
    public boolean deleteRole(Integer id) {
        if (roleDao.existsById(id)) {
            roleDao.deleteById(id);
            return true;
        }
        return false;
    }
}
