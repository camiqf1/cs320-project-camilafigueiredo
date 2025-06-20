// is the entity class that defines the schema for the Game table in the database.
// It contains fields for game title and rating, and uses Panache for simplified persistence.

package User;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;

@Entity
public class Game extends PanacheEntity {
    public String title;
    public int rating;
}

