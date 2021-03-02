import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';

function Home({ store }) {
    return (
        <div style={{ paddingTop: 16 }}>
            {store.value}
            <Button onClick={() => store.add()}>+1</Button>
        </div>
    );
}

export default inject((stores) => ({
    store: stores.homeStore,
}))(observer(Home));
