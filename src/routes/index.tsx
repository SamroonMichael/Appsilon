import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Overview from '../views/Overview';
import Policy from '../views/Policy';
import Reports from '../views/Reports';
import Company from '../views/Company';
import Users from '../views/Users';
import History from '../views/History';

const routes = [
    {
        index: true,
        path: '/',
        name: 'Login',
        component: <Login />,
        exact: true,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: <Dashboard />,
        exact: true,
    },
    {
        path: '/overview',
        name: 'Overview',
        component: <Overview />,
        exact: true,
    },
    {
        path: '/policy',
        name: 'Policy',
        component: <Policy />,
        exact: true,
    },
    {
        path: '/reports',
        name: 'Reports',
        component: <Reports />,
        exact: true,
    },
    {
        path: '/company',
        name: 'Company',
        component: <Company />,
        exact: true,
    },
    {
        path: '/users',
        name: 'Users',
        component: <Users />,
        exact: true,
    },
    {
        path: '/history',
        name: 'History',
        component: <History />,
        exact: true,
    },
];

export default routes;
