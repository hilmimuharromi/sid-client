import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Button, Modal, Select, Input } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import {connect} from 'react-redux'
import {SetUser} from '../stores/action'
import {useParams} from 'react-router-dom'
import {dataJacket, dataShirt, dataTrouser, dataSuit} from '../data/dataMeasurement'
const { Option } = Select;

const ManualMeasurement = (props) => {
    const {dataUser, SetUser} = props
    const [viewModal, setViewModal] = useState(false)
    const [options, setOptions] = useState([])
    const [current, setCurrent] = useState({
        name: "",
        url: "",
        value: ""
    })
    const [modalLogin, setModalLogin] = useState(false)
    const params = useParams()

    useEffect(() => {
        const {product} = params
        if(product === 'suits'){
            setOptions(dataSuit)
            setCurrent(dataSuit[0])
        } else if(product === 'jackets'){
            setOptions(dataJacket)
            setCurrent(dataJacket[0])
        } else if(product === 'trousers'){
            setOptions(dataTrouser)
            setCurrent(dataTrouser[0])
        } else if(product === 'shirts'){
            setOptions(dataShirt)
            setCurrent(dataShirt[0])
        }
    }, [params])

    const onSave = () => {
        if(!dataUser.token) {
            setModalLogin(true)
            return console.log('tidak bisa save')
        } else {
            return console.log('bisa save')
        }
    }

    const inputData = (e) => {
        console.log(e.target.value)
        const newOptions = options.map((item) => {
            if(item.name === current.name){
                item.value = e.target.value
            }
            return item
        })
        setOptions(newOptions)

    }
    return (
        <>
        <Modal visible={modalLogin} onCancel={() =>setModalLogin(false)}>
            <h2>Tes Login</h2>
        </Modal>
            <Row justify="center">
                <h2>Measurement</h2>
            </Row>
            <Row justify="center" style={{margin: 20}}>
                <Col span={8}>
                    <iframe width="100%" height="350" src={'https://www.youtube.com/embed/_PU-5WbBqT4'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col span={2}>
                {
                    options.map((item) => (
                        <Button style={{ margin: '5px', backgroundColor: 'transparent', width: '100%'}} onClick={() => setCurrent(item)}>
                            <CaretRightOutlined /> {item.name}
                        </Button>
                    ))
                }
                </Col>
            </Row>
            <Row justify="center">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
                    <h3>{current.name}</h3>
                    <Input 
                    type="number" 
                    placeholder="Input Here" 
                    style={{ margin: 10}}
                    value={current.value}
                    // defaultValue={current.value}
                    onChange={inputData}
                    />
                    <Button className="button-primary"
                        onClick={onSave}
                    >Save</Button>
                </div>
            </Row>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManualMeasurement)