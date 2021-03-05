import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import app1Routers from 'app1/router';

const childRouters = [...app1Routers];

export default function App() {
    return (
        <Layout>
            {childRouters.map((item) => (
                <Route key={item.path} path={item.path} component={item.component} />
            ))}
            <Route path="/app2/*" component={React.lazy(() => import('./pages/App2Entry'))} />
        </Layout>
    );
}
