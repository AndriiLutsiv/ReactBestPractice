import './styles/index.scss';
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { Suspense, useState, useContext } from "react";
import { Theme, ThemeContext } from "./styles/theme/ThemeContext";

const App = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }
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