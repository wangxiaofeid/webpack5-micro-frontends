import React from 'react';

const SchemaPage = React.lazy(() => import('./pages/Schema'));
const FlowPage = React.lazy(() => import('./pages/Flow'));

const routes = [
    {
        path: '/schema',
        component: SchemaPage,
    },
    {
        path: '/flow',
        component: FlowPage,
    },
];

export default routes.map((r) => ({ ...r, path: `/app1${r.path}` }));
