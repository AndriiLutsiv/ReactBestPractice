import './styles/index.scss';
import { Link } from "react-router-dom";
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();
    // `app ${theme}`
    return <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
        <Navbar />
        <div className='content-page'>
            <Sidebar />
            <AppRouter />
        </div>
    </div>
}

export default App;