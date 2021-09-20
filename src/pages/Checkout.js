import { useState } from "react";
import { Row, Col, Divider } from "antd";
import { Cart } from "../components";
import { connect } from "react-redux";

const CheckoutPage = ({ dataStore }) => {
  const [active, setActive] = useState("cart");

  const activeHandler = () => {
    if (active === "cart") {
      return <Cart dataCustom={dataStore} />;
    }
  };

  return (
    <div style={{ paddingLeft: 100, paddingRight: 100 }}>
      <Divider />
      <Row justify="center" style={{ marginBottom: 20 }}>
        Checkout Page
      </Row>
      <Row gutter={8} style={{ backgroundColor: "#000" }}>
        <Col className="flex-center button-div" span={8}>
          <h3 className="text-white">CART</h3>
        </Col>
        <Col className="flex-center border-horizontal button-div" span={8}>
          <h3 className="text-white">DELIVERY</h3>
        </Col>
        <Col className="flex-center button-div" span={8}>
          <h3 className="text-white">PAYMENT</h3>
        </Col>
      </Row>
      <div>{activeHandler()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { User, Custom } = state;

  return {
    dataUser: User,
    dataStore: Custom.data,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
