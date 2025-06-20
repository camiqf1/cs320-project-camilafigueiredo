// This is the RESTful resource class that handles Create, Read, Update, and Delete (CRUD)
// operations for games. It communicates with the frontend to manage game entries in the database.


package User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/games")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GameResource {

    // READ all games
    @GET
    public List<Game> getAllGames() {
        return Game.listAll();
    }

    // CREATE new game
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

    // UPDATE game by ID
    @PATCH
    @Path("/{id}")
    @Transactional
    public Response updateGame(@PathParam("id") Long id, Game updatedGame) {
        Game game = Game.findById(id);
        if (game == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("Game not found.").build();
        }
        if (updatedGame.title != null && !updatedGame.title.trim().isEmpty()) {
            game.title = updatedGame.title;
        }
        if (updatedGame.rating >= 1 && updatedGame.rating <= 5) {
            game.rating = updatedGame.rating;
        }
        return Response.ok("Game updated successfully.").build();
    }

    // DELETE game by ID
    @DELETE
    @Path("/{id}")
    @Transactional
    public Response deleteGame(@PathParam("id") Long id) {
        Game game = Game.findById(id);
        if (game == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("Game not found.").build();
        }
        game.delete();
        return Response.ok("Game deleted successfully.").build();
    }
}



