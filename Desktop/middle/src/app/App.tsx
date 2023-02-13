import './styles/index.scss';
import { Link } from "react-router-dom";
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();
    // `app ${theme}`
    return <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
        <Suspense fallback={'...Loading languages'}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>

    </div>
}

export default App;