package User;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "user_names")
public class UserName extends PanacheEntity {
    public String name;

    public UserName() {}

    public UserName(String name) {this.name = name;}

    @Override
    public String toString() {return name;}
}


