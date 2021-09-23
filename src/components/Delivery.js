import { Row, Col, Divider, Input, Typography, Form } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

const styles = {
  width: "30vw",
  marginRight: 10,
};

const Delivery = () => {
  return (
    <>
      <Row>
        <Title level={3}>Delivery</Title>
      </Row>
      <Divider />
      <Form layout="vertical" style={{ width: "80vw", paddingLeft: "10vw" }}>
        <Row>
          <Form.Item label="First Name">
            <Input style={styles} />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input style={styles} />
          </Form.Item>
        </Row>
        <Row justify="start">
          <Form.Item label="Mobile Number">
            <Input style={styles} />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Country">
            <Input style={styles} />
          </Form.Item>
          <Form.Item label="State">
            <Input style={styles} />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="City">
            <Input style={styles} />
          </Form.Item>
          <Form.Item label="Post Code">
            <Input style={styles} />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Address">
            <TextArea style={{ width: "60vw" }} />
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default Delivery;
