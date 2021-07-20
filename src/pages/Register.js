import React from 'react';
import { Form, Input, Button, Checkbox, Row, Card } from 'antd';
import { Link } from 'react-router-dom'


const Register = () => {
    const onFinish = (values) => {
        console.log('Success: ===>', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify="center">
            <Card style={{ width: '20vw', height: '35vh' }} >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Register</h2>
                </div>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item name="name"
                        rules={
                            [
                                {
                                    required: true,
                                    message: 'Please Input Your Name'
                                }
                            ]
                        }
                    >
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email',
                                message: 'Email is not valid'
                            }
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item

                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className="button-primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Link to="/login">Login</Link>
            </Card>
        </Row>
    )
}

export default Register