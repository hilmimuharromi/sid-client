import React, {useEffect} from 'react';
import { Form, Input, Button, Checkbox, Row, Card } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import {SetUser} from '../stores/action'


const Login = (props) => {
    const history = useHistory();
    const {dataUser, SetUser} = props

    useEffect(() => {
        if(dataUser.token){
            history.push('/')
        }
    }, [dataUser])
    const onFinish = (values) => {
        // localStorage.setItem('username', values.email);
        console.log('Success: ===>', values);
        SetUser(`${values.email}`)
        history.push('/')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify="center">
            <Card style={{ width: '20vw', height: '35vh' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Login</h2>
                </div>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
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
                <Link to="/register">Belum memiliki akun, register disini</Link>
            </Card>
        </Row>
    )
}

const mapStateToProps = state => {
    const {User} = state;

    return {
        dataUser: User
    }
}

const mapDispatchToProps = {
    SetUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)