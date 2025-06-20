// This is the RESTful resource class that handles Create, Read, Update, and Delete (CRUD)
// operations for games. It communicates with the frontend to manage game entries in the database.


package User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;
import jakarta.ws.rs.core.Response;


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
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response addGame(Game game) {
        if (game.title == null || game.title.trim().isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Game title is required.").build();
        }

        if (game.rating < 1 || game.rating > 5) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Rating must be between 1 and 5.").build();
        }

        game.persist();
        return Response.ok("Game \"" + game.title + "\" rated " + game.rating + " stars was added!").build();
    }

}


