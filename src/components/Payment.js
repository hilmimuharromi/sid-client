import { Row, Col, Input } from 'antd';
import { useState, useEffect } from 'react';
const Payment = (props) => {
  const { data, dataUser } = props
  const [itemsTotal, setItemsTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let itemsTotal = 0;
    let shippingCost = 0;

    data.map((item) => {
      itemsTotal += item.fabric.price;
      return item
    });

    if (dataUser.delivery.city.toLowerCase() !== 'jakarta') {
      shippingCost += 25000;
    }

    setItemsTotal(itemsTotal);
    setShipping(shippingCost);

    let total = shippingCost + itemsTotal;
    setTotal(total);
  }, [data]);

  return (
    <Row
      justify='center'
      style={{ marginTop: 10, minHeight: '30vh', minWidth: '50vw' }}
    >
      <div
        style={{
          minWidth: '50vw',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'center',
          paddingLeft: 20,
        }}
      >
        <Row justify='start'>
          <Col span={8}>
            <h3>Items Total :</h3>
          </Col>
          <Col span={16} style={{ display: 'flex' }}>
            <h3>Rp. </h3>
            <Input
              value={itemsTotal}
              style={{ width: 200, marginLeft: 10, backgroundColor: '#fff' }}
              disabled
            />
          </Col>
        </Row>
        <Row justify='start' style={{ marginTop: 10, marginBottom: 10 }}>
          <Col span={8}>
            <h3>Shipping :</h3>
          </Col>
          <Col span={16} style={{ display: 'flex' }}>
            <h3>Rp. </h3>
            <Input
              value={shipping}
              style={{ width: 200, marginLeft: 10, backgroundColor: '#fff' }}
              disabled
            />
          </Col>
        </Row>

        <Row justify='start'>
          <Col span={8}>
            <h3>Total :</h3>
          </Col>
          <Col span={16} style={{ display: 'flex' }}>
            <h3>Rp. </h3>
            <Input
              value={total}
              style={{ width: 200, marginLeft: 10, backgroundColor: '#fff' }}
              disabled
            />
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Payment;
