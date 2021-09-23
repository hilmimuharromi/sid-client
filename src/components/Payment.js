import { Row, Col, Input } from "antd";
const Payment = () => {
  return (
    <Row
      justify="center"
      style={{ marginTop: 10, minHeight: "30vh", minWidth: "50vw" }}
    >
      <div
        style={{
          minWidth: "50vw",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Row justify="start">
          <Col span={8}>
            <h3>Items Total :</h3>
          </Col>
          <Col span={16} style={{ display: "flex" }}>
            <h3>Rp. </h3>
            <Input style={{ width: 200, marginLeft: 10 }} disabled />
          </Col>
        </Row>
        <Row justify="start" style={{ marginTop: 10, marginBottom: 10 }}>
          <Col span={8}>
            <h3>Shipping :</h3>
          </Col>
          <Col span={16} style={{ display: "flex" }}>
            <h3>Rp. </h3>
            <Input style={{ width: 200, marginLeft: 10 }} disabled />
          </Col>
        </Row>

        <Row justify="start">
          <Col span={8}>
            <h3>Total :</h3>
          </Col>
          <Col span={16} style={{ display: "flex" }}>
            <h3>Rp. </h3>
            <Input style={{ width: 200, marginLeft: 10 }} disabled />
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Payment;
