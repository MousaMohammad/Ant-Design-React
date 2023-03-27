import React from 'react';
import { Button, Form, Input, Checkbox } from 'antd';
import { notification } from 'antd';


const AppContact = () => {

    const [ api, contextHolder ] = notification.useNotification();

    const openNotificationWithIcon = (type) => {
        api[type]({
          message: 'Success',
          description:
            'We will get back to you soon! Thank you for contacting us.',
        });
      };

      const onFinish = () => {
        openNotificationWithIcon('success');
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                </div>
                {contextHolder}
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        name="fullname"
                        rules={[
                        { 
                            required: true,
                            message: 'Please enter your full name!' 
                        }]
                        }
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input placeholder="Email Address"/>
                    </Form.Item>
                    <Form.Item
                        name="telephone"
                    >
                        <Input placeholder="Telephone" />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                    >
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                    >
                        <Input.TextArea placeholder="Message" />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item 
                        name="remember" 
                        valuePropName="checked"
                        noStyle
                        rules={[
                            { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                        ]}
                        >
                        <Checkbox>I agree with terms and conditions.</Checkbox>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
        </div>
    );
}


export default AppContact;