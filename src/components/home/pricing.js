import React from 'react';
import { Card, List, Button } from 'antd';

const data = [
    {
      title: 'Basic',
      content: [
        {
          price: '£29.99',
          space: '1 GB of space',
          user: '1 user',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    },
    {
      title: 'Premium',
      content: [
        {
          price: '£59.99',
          space: '5 GB of space',
          user: '5 users',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    },
    {
      title: 'Enterprise',
      content: [
        {
          price: '£99.99',
          space: 'Unlimited space',
          user: '15 users',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    }
  ];

const AppPricing = () => {
    return (
        <div id="pricing" className="block pricingBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Pricing</h2>
                    <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                </div>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={data}
                    renderItem={(item) => (
                    <List.Item>
                        <Card  className="large" title={item.title}>
                            {item.content.map((content) => (
                                <div>
                                    <p>{content.price}</p>
                                    <p>{content.space}</p>
                                    <p>{content.user}</p>
                                    <p>{content.support}</p>
                                    <p>{content.backup}</p>
                                    <p>{content.access}</p>
                                </div>
                            ))}
                            <Button type="primary" size="large"><i className="fab fa-telegram-plane"></i> Get Started</Button>
                        </Card>
                    </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default AppPricing;
