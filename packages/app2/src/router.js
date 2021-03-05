import React from 'react';

const routes = [
    {
        path: '/page1',
        component: React.lazy(() => import('./pages/Page1')),
    },
];

export default routes.map((r) => ({ ...r, path: `/app2${r.path}` }));
