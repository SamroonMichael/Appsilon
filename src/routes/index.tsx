import Dashboard from '../views/Dashboard';
import Login from '../views/Login';

const routes = [
    {
        index: true,
        path: '/',
        name: 'LoginPage',
        component: <Login />,
        exact: true,
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: <Dashboard />,
        exact: true,
    },
];

export default routes;
