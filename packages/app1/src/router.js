import React from 'react';

const routes = [
    {
        path: '/page1',
        component: React.lazy(() => import('./pages/page1')),
    },
    {
        path: '/page2',
        component: React.lazy(() => import('./pages/page2')),
    },
];

export default routes.map((r) => ({ ...r, path: `/app1${r.path}` }));
