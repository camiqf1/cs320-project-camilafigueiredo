// This is the entity class representing usernames stored in the database.
// It uses Panache for database interaction and maps to a simple table with an ID and name.


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


