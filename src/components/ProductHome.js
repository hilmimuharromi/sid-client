import React from 'react';
import { Row, Col, Image, Button } from 'antd'
import { Link } from 'react-router-dom'
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
                        src="https://i.ibb.co/YLDFfVF/unnamed.png"
                    />
                    <Button style={{ width: '200px', margin: '5px', backgroundColor: 'black', color: 'white' }}>
                        <Link to="/custom/suits/fabric">
                            Suits
                        </Link>
                    </Button>
                </Col>
                <Col span={6} justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image

                        height={200}
                        src="https://i.ibb.co/7KKm6hX/unnamed-1.png"
                    />
                    <Button style={{ width: '200px', margin: '5px', backgroundColor: 'black', color: 'white' }}>
                        <Link to="/custom/shirts/fabric">
                            Shirts
                        </Link>
                    </Button>
                </Col>
                <Col span={6} justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image

                        height={200}
                        src="https://i.ibb.co/Vt7YpY3/unnamed-2.png"
                    />
                    <Button style={{ width: '200px', margin: '5px', backgroundColor: 'black', color: 'white' }}>
                        <Link to="/custom/trousers/fabric">
                            Trousers
                        </Link>
                    </Button>
                </Col>
                <Col span={6} justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image

                        height={200}
                        src="https://i.ibb.co/khbr2dZ/unnamed-3.png"
                    />
                    <Button style={{ width: '200px', margin: '5px', backgroundColor: 'black', color: 'white' }}>
                        <Link to="/custom/jackets/fabric">
                            Jackets
                        </Link>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default ProductHome;