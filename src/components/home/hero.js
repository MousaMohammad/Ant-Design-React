import React from 'react';
import { Carousel, Button } from 'antd';

const items  = [
    {
        key: '1',
        title: 'Web development and design services for your business',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        key: '2',
        title: 'Work with the best designers and developers',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        key: '3',
        title: 'We are the best in the business',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

const AppHero = () => {
    return (
        <div className="heroBlock">
            <Carousel autoplay>
                {items.map(item => {
                    return (
                        <div key={item.key} className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                    <Button type="primary" size="large">Learn More</Button>                                    
                                    <Button size="large">Contact Us</Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};


export default AppHero;