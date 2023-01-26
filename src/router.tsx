import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projeto/:projectid" element={<Project />} />
                <Route path="/sobre" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router