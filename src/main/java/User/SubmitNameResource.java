package User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/submit-name")
public class SubmitNameResource {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional
    public Response submitName(UserName user) {
        if (user.name == null || user.name.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Please enter a username.").build();
        }
        if (user.name.contains(" ")) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Username cannot contain spaces.").build();
        }
        List<UserName> existing = UserName.find("name", user.name).list();
        if (!existing.isEmpty()) {
            return Response.status(Response.Status.CONFLICT).entity("This username is already taken.").build();
        }
        user.persist();
        return Response.ok("Hello, " + user.name + "! Your username has been stored.").build();
    }
}

