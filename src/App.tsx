import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.name} path={route.path} element={route.component} />
                    ))}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
