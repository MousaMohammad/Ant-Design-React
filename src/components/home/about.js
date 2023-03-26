import React from 'react';
import { Row, Col } from 'antd';

const items = [
    {
        key: '1',
        icon: 'fas fa-cogs',
        title: 'Simplified Workflow',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna ',
    },
    {
        key: '2',
        icon: 'fas fa-chart-line',
        title: 'Data Analytics',
        content: 'cu ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna ',
    },
    {
        key: '3',
        icon: 'fas fa-users',
        title: 'Customization',
        content: 'shoncu cu mastro ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

const AppAbout = () => {
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8 }} xs={{ span: 24 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default AppAbout;