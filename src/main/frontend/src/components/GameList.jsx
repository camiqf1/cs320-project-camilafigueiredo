import { useEffect, useState } from 'react';
import { API_URL } from '../config.jsx';

function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`${API_URL}/user`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div>
            <h2>Game List</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        {game.name} (ID: {game.id})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GameList;
