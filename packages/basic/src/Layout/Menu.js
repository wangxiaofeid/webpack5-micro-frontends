import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const menuTree = [
    {
        title: '[主]首页',
        path: '/basic/home',
    },
    {
        title: '[主]带store',
        path: '/basic/store',
    },
    {
        title: '应用1',
        children: [
            { title: '页面1', path: '/app1/page1' },
            { title: '页面2', path: '/app1/page2' },
        ],
    },
    {
        title: '应用2',
        children: [{ title: '页面1', path: '/app2/page1' }],
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
                <SubMenu key={title} title={title}>
                    {loop(children)}
                </SubMenu>
            );
        }
    });
}

function MenuComp({ history }) {
    const pathname = history.location.pathname;
    return (
        <Menu theme="dark" selectedKeys={[pathname]} mode="inline">
            {loop(menuTree)}
        </Menu>
    );
}

export default withRouter(MenuComp);
