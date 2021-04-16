import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeaderPage = (props) => {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">Inicio</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/characters">Personajes</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderPage;
