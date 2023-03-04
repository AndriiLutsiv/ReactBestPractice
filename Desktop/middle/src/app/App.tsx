import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';



const App = () => {
    const { theme } = useTheme();

    //is used to see errorBoundary
    // useEffect(() => {
    //     if (Math.random() < 0.5) {
    //         throw new Error();
    //     }
    // }, []);

    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
