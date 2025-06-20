// it allows users to add new games, rating, and it stores in the database

import { useState } from 'react';
import './AddGame.css';

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
            const response = await fetch('http://localhost:8080/games', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, rating })
            });

            if (response.ok) {
                setMessage(`Game "${title}" rated ${rating} stars was added!`);
                setTitle('');
                setRating('');
            } else {
                setMessage('Failed to add game.');
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
