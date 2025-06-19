import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Page2 from "./Page2.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/page2" element={<Page2 />} />
                {/* You can add more pages by adding more Route elements here! */}
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
