import React, { useEffect, useState } from 'react';
import { API_URL } from '../config.jsx';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch(`${API_URL}/hello/personalized`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ first: 'Game', last: 'Fan' })
                });
                const text = await response.text();
                setMessage(text);
            } catch {
                setMessage('Build your collection.');
            }
        };

        fetchMessage();
    }, []);

    return (
        <main className="cyber-page">
            <section className="hero-panel">
                <div className="hero-left">
                    <p className="eyebrow">&gt;_WELCOME_</p>
                    <h1>
                        WELCOME TO <br />
                        <span>GAMEBOXX</span>
                    </h1>
                    <p className="hero-text">
                        Discover, rate, and keep track of your favorite games —
                        just like Letterboxd, but for games.
                    </p>

                    <div className="hero-actions">
                        <a href="/page2" className="primary-action">&gt; GET STARTED</a>
                        <a href="/page2" className="secondary-action">&gt; BROWSE GAMES</a>
                    </div>
                </div>

                <aside className="news-panel">
                    <p className="eyebrow">&gt;_NEWS_FEED_</p>

                    <div className="news-item">
                        <span>01</span>
                        <h3>Browse Games</h3>
                        <p>Explore your game library and discover new favorites.</p>
                    </div>

                    <div className="news-item">
                        <span>02</span>
                        <h3>Add Reviews</h3>
                        <p>Share thoughts and ratings about the games you love.</p>
                    </div>

                    <div className="news-item">
                        <span>03</span>
                        <h3>Track Ratings</h3>
                        <p>Update, organize, and keep your collection clean.</p>
                    </div>
                </aside>
            </section>

            <section className="feature-grid">
                <div className="feature-card">
                    <div className="feature-icon">+</div>
                    <h3>Browse Games</h3>
                    <p>Explore a wide list of games and find your next favorite.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">☆</div>
                    <h3>Add Reviews</h3>
                    <p>Share your thoughts and reviews about the games you love.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">▥</div>
                    <h3>Track Ratings</h3>
                    <p>Update or edit your ratings and keep your collection organized.</p>
                </div>
            </section>

            <footer className="cyber-footer">
                <span>{message || 'SYS_VER.2.1.7'}</span>
                <span>BUILD YOUR COLLECTION_</span>
            </footer>
        </main>
    );
}

export default App;
