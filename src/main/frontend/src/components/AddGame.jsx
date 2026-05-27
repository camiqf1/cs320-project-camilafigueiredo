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

            const text = await response.text();

            if (response.ok) {
                setMessage(text);
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
        <div className="addgame-container">

            <div className="addgame-content">

                <h1 className="addgame-title">
                    Add a Game Rating
                </h1>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'center'
                    }}
                >
                    <input
                        className="addgame-input"
                        type="text"
                        placeholder="Game Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        className="addgame-input"
                        type="number"
                        placeholder="Rating (1-5)"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min="1"
                        max="5"
                    />

                    <button
                        className="addgame-button"
                        type="submit"
                    >
                        Add Game
                    </button>
                </form>

            </div>

            {message && (
                <p style={{
                    textAlign: 'center',
                    marginTop: '40px',
                    color: '#ff4fa3'
                }}>
                    {message}
                </p>
            )}

        </div>
    );
}

export default AddGame;
