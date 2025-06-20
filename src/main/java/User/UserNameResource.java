// rest endpoint to manage usernames. Supports CRUD operations and validation

package User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/user")
public class UserNameResource {

    // Create
    @POST
    @Path("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String createUser(@PathParam("name") String name) {
        UserName userName = new UserName(name);
        userName.persist();
        return "Hello " + name + "! Your name has been stored in the database.";
    }

    // Read All
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getNames() {
        return UserName.listAll().toString();
    }

    // Update
    @PATCH
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String updateName(@PathParam("id") Long id, String newName) {
        UserName userName = UserName.findById(id);
        if (userName == null) {
            throw new NotFoundException("User not found.");
        }
        String oldName = userName.name;
        userName.name = newName;
        return "'" + oldName + "' has been updated to '" + newName + "' in the database.";
    }

    // Delete
    @DELETE
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String deleteName(@PathParam("id") Long id) {
        UserName userName = UserName.findById(id);
        if (userName == null) {
            throw new NotFoundException("User not found.");
        }
        String deletedName = userName.name;
        userName.delete();
        return deletedName + " has been deleted from the database.";
    }
}

