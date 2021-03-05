import React from 'react';
import { Route } from 'react-router-dom';
import Layout from 'basic/Layout';
import routerData from './router';

export default function App() {
    return (
        <React.Suspense fallback="">
            <Layout>
                {routerData.map((item) => (
                    <Route key={item.path} path={item.path} component={item.component} />
                ))}
            </Layout>
        </React.Suspense>
    );
}
