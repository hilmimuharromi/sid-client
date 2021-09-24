import { Row, Col, Divider, Input, Typography, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SetDelivery } from '../stores/action';
const { Title } = Typography;
const { TextArea } = Input;

const styles = {
  width: '30vw',
  marginRight: 10,
};

const Delivery = () => {
  const dispatch = useDispatch();
  const dataStore = useSelector((state) => state.User.delivery);

  const {
    firstName,
    lastName,
    mobileNumber,
    country,
    state,
    city,
    postCode,
    address,
  } = dataStore;

  return (
    <>
      <Row>
        <Title level={3}>Delivery</Title>
      </Row>
      <Divider />
      {/* {JSON.stringify(dataStore)} */}
      <Form layout='vertical' style={{ width: '80vw', paddingLeft: '10vw' }}>
        <Row>
          <Form.Item label='First Name'>
            <Input
              value={firstName}
              onChange={(e) => {
                const payload = {
                  ...dataStore,
                  firstName: e.target.value,
                };
                dispatch(SetDelivery(payload));
              }}
              style={styles}
            />
          </Form.Item>
          <Form.Item label='Last Name'>
            <Input
              value={lastName}
              onChange={(e) => {
                const payload = {
                  ...dataStore,
                  lastName: e.target.value,
                };
                dispatch(SetDelivery(payload));
              }}
              style={styles}
            />
          </Form.Item>
        </Row>
        <Row justify='start'>
          <Form.Item label='Mobile Number'>
            <Input
              type='number'
              value={mobileNumber}
              onChange={(e) => {
                const payload = {
                  ...dataStore,
                  mobileNumber: e.target.value,
                };
                dispatch(SetDelivery(payload));
              }}
              style={styles}
            />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label='Country'>
            <Input
              value={country}
              onChange={(e) => {
                const payload = {
                  ...dataStore,
                  country: e.target.value,
                };
                dispatch(SetDelivery(payload));
              }}
              style={styles}
            />
          </Form.Item>
          <Form.Item label='State'>
            <Input
              value={state}
              onChange={(e) => {
                const payload = {
                  ...dataStore,
                  state: e.target.value,
                };
                dispatch(SetDelivery(payload));
              }}
              style={styles}
            />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label='City'>
            <Input
              value={city}
              onChange={(e) => {
                const payload = {
                  ...dataStore,
                  city: e.target.value,
                };
                dispatch(SetDelivery(payload));
              }}
              style={styles}
            />
          </Form.Item>
          <Form.Item label='Post Code'>
            <Input
              value={postCode}
              onChange={(e) => {
                const payload = {
                  ...dataStore,
                  postCode: e.target.value,
                };
                dispatch(SetDelivery(payload));
              }}
              style={styles}
            />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label='Address'>
            <TextArea
              value={address}
              onChange={(e) => {
                const payload = {
                  ...dataStore,
                  address: e.target.value,
                };
                dispatch(SetDelivery(payload));
              }}
              style={{ width: '60vw' }}
            />
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default Delivery;
