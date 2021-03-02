import React, { Suspense } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Menu from './Menu';
import Head from './Head';
import routerData from '../router';
import stores from '../store';
import './index.less';

const { Header, Content, Sider } = Layout;

export default function LayoutComp({ children }) {
    return (
        <Provider {...stores}>
            <BrowserRouter>
                <Layout className="main">
                    <Sider>
                        <div className="logo" />
                        <Menu />
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-top">
                            <Head />
                        </Header>
                        <Content className="site-layout-content">
                            <Suspense fallback="">
                                <Switch>
                                    {children}
                                    {routerData.map((item) => (
                                        <Route
                                            key={item.path}
                                            path={item.path}
                                            component={item.component}
                                        />
                                    ))}
                                    <Redirect exact from="/" to="main/home" />
                                    <Redirect to="/main/404" />
                                </Switch>
                            </Suspense>
                        </Content>
                    </Layout>
                </Layout>{' '}
            </BrowserRouter>
        </Provider>
    );
}
