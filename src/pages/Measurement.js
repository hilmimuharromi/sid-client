import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, Modal, Select } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { SetUser, SetMeasurement } from "../stores/action";
import { connect } from "react-redux";

const { Option } = Select;

const Measurement = (props) => {
  const { dataUser, SetUser, SetMeasurement, dataStore } = props;
  const [viewModal, setViewModal] = useState(false);
  const history = useHistory();
  const params = useParams();
  const [dataCustom, setDataCustom] = useState("");
  const [fit, setFit] = useState({});
  const [size, setSize] = useState({});

  useEffect(() => {
    const filterData = dataStore.find(
      (item) => item.product === params.product
    );
    console.log(filterData, "filter data ....");
    setDataCustom(filterData);
  }, [params, dataStore.length]);

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

  return (
    <>
      <Row justify="center">
        <h2>Measurement Options</h2>
      </Row>
      {JSON.stringify(dataCustom)}
      <Row gutter={8} justify="center">
        <Col
          span={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Manual Input</h3>
          <Image
            width={300}
            src="https://i.ibb.co/sHDSCRd/unnamed-9.png"
            style={{ marginBottom: "10px" }}
          />
          <Button
            style={{
              marginTop: "10px",
              width: 100,
              backgroundColor: "black",
              color: "#fff",
            }}
            onClick={() =>
              history.push(`/manual-measurement/${params.product}`)
            }
          >
            choose
          </Button>
        </Col>

        <Col
          span={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>STANDARD SIZING</h3>
          <Image
            width={300}
            src="https://i.ibb.co/9WtTZzM/unnamed-10.png"
            style={{ marginBottom: "10px" }}
          />
          <Button
            style={{
              marginTop: "10px",
              width: 100,
              backgroundColor: "black",
              color: "#fff",
            }}
            onClick={() => setViewModal(true)}
          >
            choose
          </Button>
        </Col>
      </Row>

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
  );
};

const mapStateToProps = (state) => {
  const { User, Custom } = state;

  return {
    dataUser: User,
    dataStore: Custom.data,
  };
};

const mapDispatchToProps = {
  SetUser,
  SetMeasurement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Measurement);
