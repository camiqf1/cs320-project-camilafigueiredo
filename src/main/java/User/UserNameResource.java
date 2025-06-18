package User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

@Path("/user")
public class UserNameResource {

    // Create
    @POST
    @Path("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String createUser(@PathParam("name") String name) {
        UserName userName = new UserName(name);// create a new username entity from the path parameter
        userName.persist();// add the UserName entity to the database
        return "Hello " + name + "! Your name has been stored in the database.";
    }

    // Read All
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getNames() {
        //retrieve and list all names from database
        return UserName.listAll().toString();
    }

    // update
    @PATCH
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String updateName(@PathParam("id") String id, String newName) {
        UserName userName = UserName.findById(id);// find the UserName entity with the given id
        String oldName = userName.name; // get the old name so we can use it in the return statement
        userName.name = newName; // update the name of the UserName entity
        return "'" + oldName + "' has been updated to '" + newName + "in the database.";
    }

    // delete
    @DELETE
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String deleteName(@PathParam("id") String id) {
        UserName userName = UserName.findById(id);// find the UserName entity with the given id
        userName.delete(); // delete the UserName entity from the database
        return userName.name + " has been deleted from the database.";
    }

}
