// it allows users to add new games, rating, and it stores in the database

import { useState } from 'react';
import './AddGame.css';
import { API_URL } from '../config.jsx';

function AddGame() {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !rating) {
            setMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/games`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, rating })
            });

            const text = await response.text(); // get backend message

            if (response.ok) {
                setMessage(text); // show success message from backend
                setTitle('');
                setRating('');
            } else {
                setMessage(`Error: ${text}`);
            }
        } catch (error) {
            setMessage('Error connecting to the server.');
        }
    };

    return (
        <div className="add-game">
            <h1>Add a Game Rating</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Game Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Rating (1–5)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="5"
                />
                <button type="submit">Add Game</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddGame;
