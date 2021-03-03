import React from 'react';
import { splitComponent } from './utils';

const HomePage = React.lazy(() => import('./pages/Home'));
const StorePage = splitComponent(import('./pages/Store'), require('./pages/Store/store').default);
const NotFindPage = React.lazy(() => import('./pages/Exception/404'));

const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/store',
        component: StorePage,
    },
    {
        path: '/404',
        component: NotFindPage,
    },
];

export default routes.map((r) => ({ ...r, path: `/basic${r.path}` }));
