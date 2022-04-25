import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/CustomTheme';
import GlobalStyles from '@mui/material/GlobalStyles';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    '*, *::before, *::after': { boxSizing: 'inherit' },
                    body: { width: '100%', height: '100%', margin: 0, padding: 0 },
                    img: { width: '100%', height: 'auto' },
                    a: { textDecoration: 'none', color: '#A2A4B9' },
                }}
            />
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.name} path={route.path} element={route.component} />
                    ))}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
