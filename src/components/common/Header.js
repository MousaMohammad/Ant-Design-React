import React from "react";
import { Menu } from 'antd';

const AppHeader = () => {
    return (
        <div className="container-fluid">
            <div className="header" >
                <div className="logo"> 
                    <i className="fas fa-rocket"></i>
                    <a href="/">SpaceX</a>
                </div>
                    <Menu mode="horizontal" defaultSelectedKeys={['home']} >
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="pricing">Pricing</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
            </div>
        </div>
    );
};

export default AppHeader;