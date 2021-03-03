import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { injectStore } from 'basic/utils';

function Schema({ globalStore }) {
    const { selectedApp } = globalStore;
    return (
        <>
            <Breadcrumb className="site-layout-content-breadcrumb">
                <Breadcrumb.Item>图谱构建</Breadcrumb.Item>
                <Breadcrumb.Item>schema定义</Breadcrumb.Item>
                <Breadcrumb.Item>{selectedApp}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content-inner">
                Schema <br />
                <Link to="/basic/home">返回首页</Link>
            </div>
        </>
    );
}

export default injectStore(Schema);
