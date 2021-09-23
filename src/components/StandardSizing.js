import {useState, useEffect} from 'react'
import { Row, Col, Image, Button, Modal, Select } from "antd";
const { Option } = Select;

const StandardSizing = (props) => {
    const { SetMeasurement, params, viewModal, setViewModal, dataCustom} = props
    const [fit, setFit] = useState({});
    const [size, setSize] = useState({});

    useEffect(() => {
        if(dataCustom.measurement) {
            const foundFit = dataCustom.measurement.find((item) => item.name === 'FIT')
            const foundSize = dataCustom.measurement.find((item) => item.name === 'SIZE')
  
            if(foundFit) {
                setFit(foundFit)
            } if(foundSize) {
                setSize(foundSize)
            }
        }
  
    }, [fit, size, dataCustom])

    
    return(
        <>
        <Modal
        visible={viewModal}
        footer={null}
        onCancel={() => setViewModal(false)}
      >
        <h2>Standard SIZING</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <h3>CHOOSE A FIT</h3>
          <Select
            value={fit.value}
            onSelect={(value) => {
                const payload = {
                    name: "FIT",
                    value: value
                }
                SetMeasurement(payload, params)
                setFit(payload)
            }}
            placeholder="FIT"
            style={{ width: 200, marginRight: "5px" }}
          >
            <Option value="tight"> TIGHT</Option>
            <Option value="fitted"> FITTED</Option>
            <Option value="loose"> LOOSE</Option>
          </Select>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            marginBottom: 5,
          }}
        >
          <h3>CHOOSE A SIZE</h3>
          <Select
            value={size.value}
            onSelect={(value) => {
                const payload = {
                    name: "SIZE",
                    value: value
                }
                SetMeasurement(payload, params)
                setSize(payload)}}
            placeholder="SIZE"
            style={{ width: 200, marginRight: "5px" }}
          >
            <Option value="XS"> XS</Option>
            <Option value="S"> S</Option>
            <Option value="M"> M</Option>
            <Option value="L"> L</Option>
            <Option value="XL"> XL</Option>
          </Select>
        </div>

        <Row justify="center">
          <Button
            className="button-primary"
            onClick={() => setViewModal(false)}
          >
            Save
          </Button>
        </Row>
        </Modal>
        </>
    )
}

export default StandardSizing