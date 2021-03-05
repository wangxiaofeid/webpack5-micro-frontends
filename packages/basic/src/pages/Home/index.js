import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import Cron from '@xiaofei.wang/react-cron';
import { injectStore } from '../../utils';
import './index.less';

function Home({ globalStore }) {
    const [cron, setCron] = useState('0 7 * * * ? *');
    const { selectedApp } = globalStore;
    return (
        <>
            <Breadcrumb className="site-layout-content-breadcrumb">
                <Breadcrumb.Item>主应用</Breadcrumb.Item>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>{selectedApp}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content-inner">
                <div className="bg">首页</div>
                <Cron value={cron} onChange={setCron} />
                {cron}
            </div>
        </>
    );
}

export default injectStore(Home);
