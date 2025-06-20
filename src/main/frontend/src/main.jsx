// it is an entry point of the React app. it sets up routing and AWS amplify configuration.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar.jsx';
import App from './components/App.jsx';
import Page2 from './components/Page2.jsx';
import GameList from './components/GameList.jsx';
import AddGame from './components/AddGame.jsx';

import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';


// configure Amplify
Amplify.configure(config);

// render app
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />             {/* Home Page */}
                <Route path="/page2" element={<Page2 />} />       {/* Extra Page */}
                <Route path="/games" element={<GameList />} />    {/* View Games */}
                <Route path="/add-game" element={<AddGame />} />  {/* Add Game */}
            </Routes>
        </BrowserRouter>
    </StrictMode>
);





