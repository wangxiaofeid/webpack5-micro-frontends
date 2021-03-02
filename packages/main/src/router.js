import React from 'react';
import { Provider } from 'mobx-react';

const HomePage = React.lazy(() => import('./pages/Home'));
const StorePage = (props) => {
    const LazyComp = React.lazy(() => import('./pages/Store'));
    const stores = require('./pages/Store/store').default;
    return (
        <Provider {...stores}>
            <LazyComp {...props} />
        </Provider>
    );
};
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

export default routes.map((r) => ({ ...r, path: `/main${r.path}` }));
