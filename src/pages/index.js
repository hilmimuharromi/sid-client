import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Layout, Menu, Image } from 'antd';
import {
    HomeOutlined,

} from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Home from './Home'
import CustomPage from './Custom'
import Measurement from './Measurement'
import ManualMeasurement from './ManualMeasurement'
import {connect} from 'react-redux'
import {SetUser} from '../stores/action'


const { Header, Content, Footer } = Layout;


const MainPage = (props) => {
    const history = useHistory();
    const {dataUser, SetUser} = props
    const [collapsed, setCollapsed] = useState(false)

    function toggle() {
        setCollapsed(!collapsed)
    }

    function logout() {
        SetUser("")
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">

                <div className="logo">
                    <Image src={"https://i.ibb.co/GCgpW7V/logo.png"} height={50} />
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['1']} className="menu">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" >
                        FAQ
                    </Menu.Item>
                    <Menu.Item key="3" >
                        About Us
                    </Menu.Item>
                    <Menu.Item key="4" >
                        {
                            dataUser.token ? 
                            <Link onClick={logout}>
                            Logout
                        </Link> : 
                        <Link to="/login">
                            Login
                        </Link>
                        }
                    </Menu.Item>
                </Menu>
            </Header>
            <Content
                // className="site-layout-background"
                style={{
                    // margin: '24px 16px',
                    // padding: 24,
                    // minHeight: 280,
                }}
            >
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/custom/:product/:style">
                        <CustomPage />
                    </Route>
                    <Route path="/measurement/:product">
                        <Measurement />
                    </Route>
                    <Route path="/manual-measurement/:product">
                        <ManualMeasurement />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Content>
            <Footer className="footer">ini footer</Footer>
        </Layout >
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)