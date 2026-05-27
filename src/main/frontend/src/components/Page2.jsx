import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Page2.css';

function Page2({ signOut, user }) {
    return (
        <div className="page2-container">

            <div className="page2-content">

                <div>
                    <h1 className="page2-title">
                        Welcome back,
                    </h1>

                    <p style={{
                        color: '#f2f2f2',
                        fontSize: '1.5rem',
                        marginTop: '10px'
                    }}>
                        {user.username}
                    </p>

                    <button
                        onClick={signOut}
                        style={{
                            marginTop: '30px'
                        }}
                        className="addgame-button"
                    >
                        Sign Out
                    </button>
                </div>

            </div>
        </div>
    );
}

export default withAuthenticator(Page2);
