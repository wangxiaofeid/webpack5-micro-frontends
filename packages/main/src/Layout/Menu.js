import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const menuTree = [
    {
        title: '[主]首页',
        path: '/main/home',
    },
    {
        title: '[主]带store',
        path: '/main/store',
    },
    {
        title: '图谱构建',
        children: [
            { title: '图谱定义', path: '/build/schema' },
            { title: '数据抽取', path: '/build/flow' },
        ],
    },
];

function loop(arr) {
    return arr.map(({ title, path, children }) => {
        if (path) {
            return (
                <Menu.Item key={path}>
                    <NavLink to={path}>{title}</NavLink>
                </Menu.Item>
            );
        } else {
            return (
                <SubMenu key="build" title={title}>
                    {loop(children)}
                </SubMenu>
            );
        }
    });
}

function MenuComp() {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {loop(menuTree)}
        </Menu>
    );
}

export default withRouter(MenuComp);
