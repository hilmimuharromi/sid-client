import { useState } from 'react';
import { Row, Col, Divider, Button, Empty, message } from 'antd';
import { Cart, Delivery, Payment, EndCustomize } from '../components';
import { connect } from 'react-redux';

const CheckoutPage = ({ dataStore, dataUser }) => {
  const [active, setActive] = useState('cart');

  const menus = [
    {
      title: 'CART',
      value: 'cart',
    },
    {
      title: 'DELIVERY',
      value: 'delivery',
    },
    {
      title: 'PAYMENT',
      value: 'payment',
    },
  ];

  const activeHandler = () => {
    if (active === 'cart') {
      return <Cart dataCustom={dataStore} />;
    } else if (active === 'delivery') {
      return <Delivery />;
    } else if (active === 'payment') {
      return <Payment data={dataStore} dataUser={dataUser} />;
    }
  };

  const styleActive = (item) => {
    if (active === item) {
      return {
        backgroundColor: '#fff',
        color: '#000',
      };
    } else {
      return {
        backgroundColor: '#000',
        color: '#fff',
      };
    }
  };

  if (dataStore.length === 0) {
    return (
      <>
        <Row justify='center' style={{ marginBottom: 20 }}>
          Checkout Page
        </Row>
        <Divider />
        <Empty />
        <Divider />
      </>
    );
  }

  const error = () => {
    return message.error(`you haven't filled everything up`);
  };

  const validasiDelivery = () => {
    const {delivery} = dataUser
    const {
      firstName,
      lastName,
      mobileNumber,
      country,
      state,
      city,
      postCode,
      address,
    } = delivery;

    console.log(delivery)

    if (!firstName || !lastName
      || !mobileNumber
      || !country
      || !state
      || !city
      || !postCode
      || !address) {
      return false
    } 
      return true
  };

  const onNext = () => {
    if (active === 'cart') {
      setActive('delivery');
    } else if (active === 'delivery') {
      let status = validasiDelivery()
      console.log(status, 'status')
      if(status) {
        setActive('payment');
      } else {
        error()
      }
    }
  };

  return (
    <>
      <div style={{ paddingLeft: 100, paddingRight: 100 }}>
        <Divider />
        <Row justify='center' style={{ marginBottom: 20 }}>
          Checkout Page
        </Row>
        <Row gutter={8}>
          {menus.map((item) => (
            <Col
              className='flex-center button-div'
              onClick={() => setActive(item.value)}
              style={styleActive(item.value)}
              span={8}
            >
              <h3 className={active !== item.value && 'text-white'}>
                {item.title}
              </h3>
            </Col>
          ))}
        </Row>
        <div>{activeHandler()}</div>
        <Divider />
        {/* {JSON.stringify(dataStore)} */}
        <Row
          justify='end'
          style={{
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <div>
            {active !== 'cart' && (
              <Button
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  marginRight: 10,
                  width: 200,
                }}
                onClick={() => {
                  if (active === 'delivery') {
                    setActive('cart');
                  } else if (active === 'payment') {
                    setActive('delivery');
                  }
                }}
              >
                Back
              </Button>
            )}
            {active !== 'payment' && (
              <Button
                style={{ backgroundColor: '#000', color: '#fff', width: 200 }}
                onClick={onNext}
              >
                Next
              </Button>
            )}
            {active === 'payment' && (
              <Button
                type='primary'
                style={{ color: '#fff', width: 200 }}
                onClick={() => {
                  console.log('bayar ....');
                }}
              >
                Pay
              </Button>
            )}
          </div>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { User, Custom } = state;

  const filterData = Custom.data.filter((item) => item.fabric);

  return {
    dataUser: User,
    dataStore: filterData,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
