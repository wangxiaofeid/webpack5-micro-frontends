import React from 'react';
import { Breadcrumb } from 'antd';
import Cron from '@xiaofei.wang/react-cron';
import { injectStore } from '../../utils';

function Home({ globalStore }) {
    const { selectedApp } = globalStore;
    return (
        <>
            <Breadcrumb className="site-layout-content-breadcrumb">
                <Breadcrumb.Item>主应用</Breadcrumb.Item>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>{selectedApp}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content-inner">
                首页
                <Cron />
            </div>
        </>
    );
}

export default injectStore(Home);
