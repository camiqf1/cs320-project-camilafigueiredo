// main landing page of the site that introduces the application purpose and design.

import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="p-6 space-y-10 text-center">
            <h1 className="text-4xl font-bold">🎮 GameBoxx</h1>
            <p className="text-lg text-gray-600">
                Discover, rate, and share your favorite video games.
            </p>
            <Link to="/page2" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Go to My Games
            </Link>
        </div>
    );
}

export default HomePage;
