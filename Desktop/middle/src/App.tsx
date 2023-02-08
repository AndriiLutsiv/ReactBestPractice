import './styles/index.scss';
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { Suspense, useState, useContext } from "react";
import { useTheme } from './styles/theme/useTheme';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Theme</button>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/about" element={<AboutPageAsync />} />
                <Route path="/" element={<MainPageAsync />} />
            </Routes>
        </Suspense>
    </div>
}

export default App;