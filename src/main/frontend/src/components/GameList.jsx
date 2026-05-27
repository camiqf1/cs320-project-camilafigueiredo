import { useEffect, useState } from 'react';
import { API_URL } from '../config.jsx';
import './GameList.css';

function GameList() {
    const [games, setGames] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editRating, setEditRating] = useState('');

    const fetchGames = async () => {
        try {
            const response = await fetch(`${API_URL}/games`);
            const data = await response.json();
            setGames(data);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    const handleDelete = async (id) => {
        await fetch(`${API_URL}/games/${id}`, { method: 'DELETE' });
        fetchGames();
    };

    const startEditing = (game) => {
        setEditId(game.id);
        setEditTitle(game.title);
        setEditRating(game.rating);
    };

    const handleUpdate = async () => {
        const response = await fetch(`${API_URL}/games/${editId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: editTitle, rating: editRating }),
        });

        if (response.ok) {
            setEditId(null);
            fetchGames();
        }
    };

    return (
        <div className="game-list-page">
            <div className="game-list-wrapper">
                <h1 className="game-list-title">Game List</h1>

                <div className="game-list-panel">
                    {games.length === 0 ? (
                        <p className="empty-message">No games added yet.</p>
                    ) : (
                        games.map((game) => (
                            <div className="game-row" key={game.id}>
                                {editId === game.id ? (
                                    <>
                                        <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                        <input type="number" value={editRating} onChange={(e) => setEditRating(e.target.value)} min="1" max="5" />
                                        <button onClick={handleUpdate}>Save</button>
                                        <button onClick={() => setEditId(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <h3>{game.title}</h3>
                                            <p>{game.rating} / 5 stars</p>
                                        </div>
                                        <div className="game-actions">
                                            <button onClick={() => startEditing(game)}>Edit</button>
                                            <button onClick={() => handleDelete(game.id)}>Delete</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default GameList;
