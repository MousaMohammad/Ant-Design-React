import React from 'react';

import mdrnImg from '../../assets/images/modern-design.jpg';
import clnDesgn from '../../assets/images/clean-design.jpg';
import grtSprt from '../../assets/images/great-support.jpg';
import efcCmm from '../../assets/images/easy-customise.jpg';
import unlmtdFture from '../../assets/images/unlimited-features.jpg';
import advOptions from '../../assets/images/advanced-option.jpg';

import { Row, Col, Card } from 'antd';

const {Meta} = Card; 
const Style = {
    margin: 8
}
const AppFeature = () => {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                </div>
                <Row gutter={[16, 24]}>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={Style}
                        cover={<img alt="example" src={mdrnImg} />}
                    >
                        <Meta title="Modern Design" />
                    </Card>
                    </Col>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={Style}
                        cover={<img alt="example" src={clnDesgn} />}
                    >
                        <Meta title="Clean Design" />
                    </Card>
                    </Col>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={Style}
                        cover={<img alt="example" src={grtSprt} />}
                    >
                        <Meta title="Great Support" />
                    </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                <Col span={8}>
                    <Card
                        hoverable
                        style={Style}
                        cover={<img alt="example" src={advOptions} />}
                    >
                        <Meta title="Advanced options" />
                    </Card>
                    </Col>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={Style}
                        cover={<img alt="example" src={unlmtdFture} />}
                    >
                        <Meta title="Unlimited Features" />
                    </Card>
                    </Col>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={Style}
                        cover={<img alt="example" src={efcCmm} />}
                    >
                        <Meta title="Easy Customize" />
                    </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AppFeature;
