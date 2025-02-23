package utez.edu.mx.Gestion_persona.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import utez.edu.mx.Gestion_persona.models.entity.RoleBean;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<RoleBean, Integer> {
    Optional<RoleBean> findByName(String name);

}
