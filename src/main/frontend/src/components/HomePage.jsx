// main landing page of the site that introduces the application purpose and design.
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="min-h-screen bg-[#070707] text-white px-10 py-8 overflow-hidden">

            <nav className="flex justify-between items-center mb-24">
                <h1 className="text-3xl font-black tracking-[0.3em] text-pink-500">
                    GAMEBOXX
                </h1>

                <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
                    <a href="#">Home</a>
                    <a href="#">Library</a>
                    <a href="#">Reviews</a>
                    <a href="#">Profile</a>
                </div>
            </nav>

            <div className="max-w-5xl">

                <p className="uppercase tracking-[0.3em] text-pink-500 text-sm mb-6">
                    Cyberpunk Game Tracking
                </p>

                <h1 className="text-7xl font-black leading-[0.9] mb-8">
                    TRACK <br />
                    YOUR <br />
                    GAMES
                </h1>

                <p className="text-gray-400 text-lg leading-8 max-w-2xl mb-10">
                    Discover, organize, and review your favorite games in a futuristic
                    minimalist platform inspired by retro cyberpunk interfaces.
                </p>

                <div className="flex gap-5 mb-20">
                    <Link
                        to="/page2"
                        className="bg-pink-500 hover:bg-pink-400 transition-all px-6 py-3 rounded-xl font-bold"
                    >
                        Open Library
                    </Link>

                    <button className="border border-gray-700 hover:border-pink-500 px-6 py-3 rounded-xl transition-all">
                        Explore Games
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-6">

                    <div className="bg-[#111111] border border-[#222] rounded-2xl p-6 hover:border-pink-500 transition-all">
                        <p className="text-pink-500 uppercase text-xs tracking-widest mb-3">
                            Library
                        </p>

                        <h2 className="text-2xl font-bold mb-4">
                            Organize Your Collection
                        </h2>

                        <p className="text-gray-400 leading-7">
                            Build your personal game collection and keep track of your
                            favorite titles.
                        </p>
                    </div>

                    <div className="bg-[#111111] border border-[#222] rounded-2xl p-6 hover:border-pink-500 transition-all">
                        <p className="text-pink-500 uppercase text-xs tracking-widest mb-3">
                            Reviews
                        </p>

                        <h2 className="text-2xl font-bold mb-4">
                            Rate Experiences
                        </h2>

                        <p className="text-gray-400 leading-7">
                            Share your opinions and discover new experiences through
                            community reviews.
                        </p>
                    </div>

                    <div className="bg-[#111111] border border-[#222] rounded-2xl p-6 hover:border-pink-500 transition-all">
                        <p className="text-pink-500 uppercase text-xs tracking-widest mb-3">
                            Profiles
                        </p>

                        <h2 className="text-2xl font-bold mb-4">
                            Create Your Identity
                        </h2>

                        <p className="text-gray-400 leading-7">
                            Customize your profile and showcase your favorite games and
                            achievements.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;