// This is the RESTful resource class that handles Create, Read, Update, and Delete (CRUD)
// operations for games. It communicates with the frontend to manage game entries in the database.


package User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/games")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GameResource {

    @GET
    public List<Game> getAllGames() {
        return Game.listAll();
    }

    @POST
    @Transactional
    public void addGame(Game game) {
        game.persist();
    }
}


