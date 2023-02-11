import './styles/index.scss';
import { Link } from "react-router-dom";
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    // `app ${theme}`
    return <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
        <button onClick={toggleTheme}>Theme</button>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <AppRouter />
    </div>
}

export default App;