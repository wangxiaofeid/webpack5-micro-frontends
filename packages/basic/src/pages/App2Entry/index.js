import React from 'react';
import { Route } from 'react-router-dom';
import app2Routers from 'app2/router';

export default function App2Entry() {
    return (
        <>
            {app2Routers.map((item) => (
                <Route key={item.path} path={item.path} component={item.component} />
            ))}
        </>
    );
}
