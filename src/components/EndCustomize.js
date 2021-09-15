import React from 'react';
import { Card, Row, Col, Image, Input } from 'antd'
const { TextArea } = Input;
const EndCustomize = ({
    data
}) => {
    return (
        <div style={{ flexDirection: 'column', width: '50%' }}>
            <Row justify="center">
                <h2>Custom Made Cart</h2>
            </Row>
            <Card style={{ width: '100%' }}>
                <Row>
                    {data.customize.map((item, index) => (
                        <div style={{ display: 'flex', width: 300 }}>
                            <Card style={{ width: 200, padding: 0 }}>
                                <div style={{ marginTop: 0, width: '100%', height: 50, padding: 0, }}>
                                    {item.name}
                                </div>
                                <h3>
                                    {item.option}
                                </h3>
                            </Card>
                            <Card style={{ width: 200 }}>
                                <Image src={item.image} preview={false} width={100} />
                            </Card>
                        </div>
                    ))}
                </Row>
                <Row>
                    <div style={{ display: 'flex'}}>
                        <Card style={{ width: 200, padding: 0 }}>
                            <TextArea placeholder="Monogram" rows={4} />
                        </Card>
                        <Card style={{ width: 200, padding: 0 }}>
                            <TextArea placeholder="Message" rows={4} />
                        </Card>
                    </div >
                </Row>
            </Card>
        </div >
    )
}

export default EndCustomize