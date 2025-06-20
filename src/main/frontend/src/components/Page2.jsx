// it is a sign-in page it shows the logged-in user's name.

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Page2.css';


function Page2({ signOut, user }) {
    return (
        <>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
        </>
    );
}

export default withAuthenticator(Page2);
