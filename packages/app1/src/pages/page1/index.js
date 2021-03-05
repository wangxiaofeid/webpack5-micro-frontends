import React, { useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { injectStore } from 'basic/utils';

function Flow({ globalStore }) {
    useEffect(() => {
        globalStore.hideSelectApp();
        return () => {
            globalStore.showSelectApp();
        };
    }, []);
    return (
        <>
            <Breadcrumb className="site-layout-content-breadcrumb">
                <Breadcrumb.Item>应用1</Breadcrumb.Item>
                <Breadcrumb.Item>页面1</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content-inner">演示与父应用通讯</div>
        </>
    );
}

export default injectStore(Flow);
