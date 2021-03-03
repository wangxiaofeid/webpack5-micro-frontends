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
                <Breadcrumb.Item>图谱构建</Breadcrumb.Item>
                <Breadcrumb.Item>数据流</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content-inner">数据流</div>
        </>
    );
}

export default injectStore(Flow);
