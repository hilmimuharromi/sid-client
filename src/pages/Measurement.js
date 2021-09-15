import React, { useState } from 'react';
import { Row, Col, Image, Button, Modal, Select } from 'antd'
import {useHistory, useParams} from 'react-router-dom'
const {Option} = Select;


const Measurement = () => {
    const [viewModal, setViewModal] = useState(false)
    const history = useHistory()
    const params = useParams()

    return (
        <>
            <Row justify="center">
                <h2>Measurement Options</h2>
            </Row>
            <Row gutter={8} justify="center">
                <Col span={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                    <h3>Manual Input</h3>
                    <Image width={300} src="https://i.ibb.co/sHDSCRd/unnamed-9.png" style={{ marginBottom: '10px' }} />
                    <Button style={{ marginTop: '10px', width: 100, backgroundColor: 'black', color: '#fff' }}
                    onClick={() => history.push(`/manual-measurement/${params.product}`)}
                    >choose</Button>
                </Col>

                <Col span={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                    <h3>STANDARD SIZING</h3>
                    <Image width={300} src="https://i.ibb.co/9WtTZzM/unnamed-10.png" style={{ marginBottom: '10px' }} />
                    <Button style={{ marginTop: '10px', width: 100, backgroundColor: 'black', color: '#fff' }}
                        onClick={() => setViewModal(true)}
                    >choose</Button>
                </Col>
            </Row>
           

            <Modal visible={viewModal} footer={null} onCancel={() => setViewModal(false)}>
                <h2>Standard SIZING</h2>
                <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', alignContent: 'center'}}>
                    <h3>CHOOSE A FIT</h3>
                    <Select placeholder='FIT' style={{ width: 200, marginRight: '5px' }}>
                        <Option value='tight'> TIGHT</Option>
                        <Option value='fitted'> FITTED</Option>
                        <Option value='loose'> LOOSE</Option>
                    </Select>
                </div>

                <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', marginBottom: 5 }}>
                    <h3>CHOOSE A SIZE</h3>
                    <Select placeholder='SIZE' style={{ width: 200, marginRight: '5px' }}>
                        <Option value='XS'> XS</Option>
                        <Option value='S'> S</Option>
                        <Option value='M'> M</Option>
                        <Option value='L'> L</Option>
                        <Option value='XL'> XL</Option>

                    </Select>
                </div>

                <Row justify="center">
                    <Button className="button-primary"
                        onClick={() => setViewModal(false)}
                    >Save</Button>
                </Row>

            </Modal>
        </>
    )
}



export default Measurement;