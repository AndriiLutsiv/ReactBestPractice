import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
                Object.values(RouteConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className="page-wrapper">{element}</div>
                        }
                    />
                ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
