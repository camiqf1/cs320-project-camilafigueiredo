import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Page2.css';

function Page2({ signOut, user }) {
    return (
        <div className="page2-container">

            <div className="page2-content">

                <div className="page2-panel">

                    <p className="page2-label">
                        USER PROFILE
                    </p>

                    <h1 className="page2-title">
                        Welcome back
                    </h1>

                    <p className="page2-username">
                        {user.username}
                    </p>

                    <button
                        onClick={signOut}
                        className="page2-button"
                    >
                        Sign Out
                    </button>

                </div>

            </div>

        </div>
    );
}

export default withAuthenticator(Page2);
