import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Breadcrumb } from 'antd';

function Home({ store }) {
    return (
        <>
            <Breadcrumb className="site-layout-content-breadcrumb">
                <Breadcrumb.Item>主应用</Breadcrumb.Item>
                <Breadcrumb.Item>演示store</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content-inner">
                {store.value}
                <Button onClick={() => store.add()}>+1</Button>
            </div>
        </>
    );
}

export default inject((stores) => ({
    store: stores.homeStore,
}))(observer(Home));
