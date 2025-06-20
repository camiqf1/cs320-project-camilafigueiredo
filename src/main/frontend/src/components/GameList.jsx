// it fetches and displays the list of games stored and rated in the database via a GET request.


import { useEffect, useState } from 'react';
import { API_URL } from '../config.jsx';

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
        try {
            await fetch(`${API_URL}/games/${id}`, { method: 'DELETE' });
            fetchGames(); // refresh list
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    };

    const startEditing = (game) => {
        setEditId(game.id);
        setEditTitle(game.title);
        setEditRating(game.rating);
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`${API_URL}/games/${editId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: editTitle, rating: editRating }),
            });

            if (response.ok) {
                setEditId(null);
                fetchGames();
            } else {
                alert('Update failed.');
            }
        } catch (error) {
            console.error('Error updating game:', error);
        }
    };

    return (
        <div>
            <h2>Game List</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        {editId === game.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={editRating}
                                    onChange={(e) => setEditRating(e.target.value)}
                                    min="1"
                                    max="5"
                                />
                                <button onClick={handleUpdate}>Save</button>
                                <button onClick={() => setEditId(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <strong>{game.title}</strong> — ⭐ {game.rating} stars
                                <button onClick={() => startEditing(game)}>Edit</button>
                                <button onClick={() => handleDelete(game.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GameList;


