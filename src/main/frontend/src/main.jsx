import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from "./components/Navbar.jsx";
import App from './components/App.jsx'
import Page2 from "./components/Page2.jsx";
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/page2" element={<Page2 />} />
                {/* You can add more pages by adding more Route elements here! */}
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)


