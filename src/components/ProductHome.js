import React from 'react';
import { Row, Col, Image, Button } from 'antd'

const ProductHome = () => {
    return (
        <div style={{ backgroundColor: '#fff', width: '100vw', margin: '0', height: '50vh' }}>
            <Row justify="center" style={{ margin: '30px' }}>
                <h2>WHAT ARE YOU LOOKING FOR?</h2>
            </Row>
            <Row justify="center" gutter={[32, 16]}>
                <Col span={6} justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image

                        height={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Button style={{ width: '200px', margin: '5px', backgroundColor: 'black', color: 'white' }}>Suits</Button>
                </Col>
                <Col span={6} justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image

                        height={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Button style={{ width: '200px', margin: '5px', backgroundColor: 'black', color: 'white' }}>Suits</Button>
                </Col>
                <Col span={6} justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image

                        height={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Button style={{ width: '200px', margin: '5px', backgroundColor: 'black', color: 'white' }}>Suits</Button>
                </Col>
                <Col span={6} justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image

                        height={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Button style={{ width: '200px', margin: '5px', backgroundColor: 'black', color: 'white' }}>Suits</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ProductHome;