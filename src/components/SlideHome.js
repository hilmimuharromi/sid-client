import React from 'react';
import { Image } from 'antd'
const SlideHome = () => {
    return (
        <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'space-around', padding: 0, margin: 0 }}>
            <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '10px', padding: '50px', }}>
                <h1 style={{ fontWeight: 'bold', textAlign: 'right', fontSize: '40px', marginBottom: '50px' }}>DISCOVER TRUE TAILORING</h1>
                <div style={{ textAlign: 'right', fontSize: '18px', marginBottom: '0' }}>
                    <p>Custom Tailored Suits, Jackets, Shirts, and trousers by choosing from more than 100+ fabrics.</p>
                    <p>Design your attire at Theclassyfit.co.id and forget about standard sizes</p>
                    <p>because all our suits are 100% made to measure.</p>
                </div>
            </div>
        </div>
    )
}

export default SlideHome;