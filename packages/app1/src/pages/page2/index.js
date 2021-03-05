import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Cron from '@xiaofei.wang/react-cron';
import { injectStore } from 'basic/utils';
import './index.less';

function Schema({ globalStore }) {
    const [cron, setCron] = useState('0 7 * * * ? *');
    const { selectedApp } = globalStore;
    return (
        <>
            <Breadcrumb className="site-layout-content-breadcrumb">
                <Breadcrumb.Item>应用1</Breadcrumb.Item>
                <Breadcrumb.Item>页面2</Breadcrumb.Item>
                <Breadcrumb.Item>{selectedApp}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content-inner">
                <div className="bg">演示跳转、通讯、多版本包</div>
                <Cron value={cron} onChange={setCron} />
                {cron}
                <Link to="/basic/home">返回首页</Link>
            </div>
        </>
    );
}

export default injectStore(Schema);
