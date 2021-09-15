import React, { useState, useEffect } from 'react';
import { Row, Divider, Button, Image, Card } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import dataSuit from '../data/customSuit'
import dataShirt from '../data/customShirts'
import dataTrouser from '../data/customTrouser';
import dataJacket from '../data/customJacket'
const Customize = (props) => {
    const [data, setData] = useState([])
    const [currentData, setCurrentData] = useState("")
    const { params, dataCustom, setDataCustom } = props
   

    useEffect(() => {
        console.log('params ==>', params)
        if (params.product === 'suits') {
            setData(dataSuit)
            setCurrentData(dataSuit[0])
        } else if (params.product === 'shirts') {
            setData(dataShirt)
            setCurrentData(dataShirt[0])
        } else if (params.product === 'trousers') {
            setData(dataTrouser)
            setCurrentData(dataTrouser[0])
        } else if (params.product === 'jackets') {
            setData(dataJacket)
            setCurrentData(dataJacket[0])
        }
    }, [params])



    function selectCustom(item) {
        let selectData = {
            name: currentData.name,
            option: item.name,
            image: item.url,
        }
        setDataCustom(selectData)
        return console.log(item)
        const found = dataCustom.find((i) => i.name === currentData.name)
        if (dataCustom.length === 0) {
            setDataCustom([selectData])
        } else if (!found) {
            let oldData = dataCustom
            oldData.push(selectData)
            setDataCustom(oldData)
        } else {
            const newData = dataCustom.map(i => {
                if (i.name === currentData.name) {
                    i = selectData
                }
                return i
            })
            setDataCustom(newData)
        }
    }

    function selectedItem(image) {
        const found = dataCustom.customize.find((item) => item.name === currentData.name)
        if (found) {
            if (image.name === found.option) {
                return "red"
            } else {
                return ""
            }
        } else {
     
                return ""
        }
    }


    return (
        <div style={{ flexDirection: 'column', width: '50%' }}>
            <Divider />
            {JSON.stringify(dataCustom)}
            <Row justify="center" >
                {
                    data.map((item) => (
                        <Button style={{ margin: '5px', backgroundColor: 'transparent' }} onClick={() => setCurrentData(item)}>
                            <CaretRightOutlined /> {item.name}
                        </Button>
                    ))
                }
            </Row>
            <Row>
                {
                    currentData && currentData.images.map((item) => (
                        <Card
                            style={{ flexDirection: 'column', margin: '5px', width: "200px", cursor: 'pointer', padding: 5, borderColor: selectedItem(item) }}
                            onClick={() => selectCustom(item)}
                        >
                            <Image src={item.url} preview={false} />
                            <h3>{item.name}</h3>
                        </Card>
                    ))
                }
            </Row>
        </div>
    )
}

export default Customize;