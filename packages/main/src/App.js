import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';

export default function App() {
    return (
        <Layout>
            {/* <Route path="dashboard/*" element={<DashboardService />} />
                    <Route path="orders/*" element={<OrderService />} />
                    <Route path="profile/*" element={<ProfilePage />} /> */}
        </Layout>
    );
}
