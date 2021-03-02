import React from 'react';
import { observer, inject } from 'mobx-react';
import { Select } from 'antd';

const { Option } = Select;

const apps = [
    {
        label: '广发知识图谱',
        value: 'guangfa',
    },
    {
        label: '光大知识图谱',
        value: 'guangda',
    },
];

function Head({ store }) {
    const { selectedApp } = store;
    return (
        <div style={{ margin: 20 }}>
            <Select value={selectedApp} onChange={(value) => store.changeApp(value)}>
                {apps.map(({ label, value }) => (
                    <Option key={value} value={value}>
                        {label}
                    </Option>
                ))}
            </Select>
        </div>
    );
}

export default inject((stores) => ({
    store: stores.globalStore,
}))(observer(Head));
