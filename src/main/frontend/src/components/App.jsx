import React, { useEffect, useState } from 'react';
import { API_URL } from '../config.jsx'; // adjust path if config.js is in another folder

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch(`${API_URL}/hello/personalized`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ first: 'Game', last: 'Fan' })
            });
            const text = await response.text();
            setMessage(text);
        };
        fetchMessage();
    }, []);

    return (
        <div>
            <h1>🎮 GameRate</h1>
            <p>{message}</p>

            <h2>Welcome to GameRate!</h2>
            <p>Discover, rate, and keep track of your favorite games — just like Letterboxd, but for games!</p>

            <h3>Features:</h3>
            <ul>
                <li>🕹️ Browse a list of rated games</li>
                <li>⭐ Add your own game reviews</li>
                <li>📈 Update or edit your ratings</li>
            </ul>

            <p>Use the navbar above to get started.</p>
        </div>
    );
}

export default App;



