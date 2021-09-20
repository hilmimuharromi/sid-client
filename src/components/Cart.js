import { Row, Col, Image, Space, Button, Typography } from "antd";

const { Title } = Typography;

const Cart = ({ dataCustom }) => {
  const imageHandler = (product) => {
    switch (product) {
      case "suits":
        return "https://i.ibb.co/WGc3pyN/unamed-3.png";
      case "shirts":
        return "https://i.ibb.co/5ThYzG9/unamed-2.png";
      case "trousers":
        return "https://i.ibb.co/7RrYZYj/unamed-1.png";
      case "jackets":
        return "https://i.ibb.co/Z8x7Qrh/unnamed.png";
      default:
        break;
    }
  };
  return (
    <>
      {dataCustom.map((item) => (
        <Row justify="center">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "75vw",
              backgroundColor: "#fff",
              minHeight: "15vh",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <div className="flex-center">
              <Image width={100} src={imageHandler(item.product)} />
            </div>
            <div style={{ width: "50%", borderWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 20,
                }}
              >
                <Title className="text-low-margin" level={4}>
                  {item.fabric.name}
                </Title>
                <p className="text-low-margin">Category: {item.product}</p>
                <Title level={4}>CUSTOMIZATION:</Title>
                <Space>
                  <Button>Edit</Button>
                  <Button>View</Button>
                </Space>

                <Title level={4}>MEASUREMENTS:</Title>
                <Space>
                  <Button>Edit</Button>
                  <Button>View</Button>
                </Space>
              </div>
            </div>
            <div style={{ width: "20%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 20,
                }}
              >
                <h3>Rp. {item.fabric.price}</h3>
              </div>
            </div>
          </div>
        </Row>
      ))}
    </>
  );
};

export default Cart;
