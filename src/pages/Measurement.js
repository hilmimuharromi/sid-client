import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, Modal, message } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { SetUser, SetMeasurement } from "../stores/action";
import { connect } from "react-redux";
import {StandardSizing, ManualMeasurement, FormLogin} from '../components'



const Measurement = (props) => {
  const { dataStore, dataUser } = props;
  const [viewModal, setViewModal] = useState(false);
  const history = useHistory();
  const params = useParams();
  const [dataCustom, setDataCustom] = useState("");

  const [manualView, setManualView] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)
  const [modalValidasi, setModalValidasi] = useState(false)


  useEffect(() => {
    const filterData = dataStore.find(
      (item) => item.product === params.product
    );
    setDataCustom(filterData);
  }, [params, dataStore.length]);

  if(manualView) {
    return (
      <ManualMeasurement setManualView={setManualView} />
    )
  }

  const error = () => {
    return message.error(`you haven't filled everything up`);
  };

  const validasiMeasurement = () => {
    let status = ''
    let standard = false
    let manual = false

    dataCustom.measurement.map((item) => {
    

      if(item.name === 'FIT' || item.name === 'SIZE') {
        if(item.value){
          standard = true
        }
      } else {
        if(item.value){
          manual = true
        }
      }
    })

    console.log( 'standard ===', standard)
    console.log('manual ===', manual)


    if(!standard && !manual) {
      status = 'error'
    } else if(standard && manual) {
       status = 'modal'
    } else {
    status = 'next'
    }

    return status
  }

  const onSave = () => {
    
    const status = validasiMeasurement()
    
    if(status === 'next') {
      if (!dataUser.token) {
        setModalLogin(true);
        return console.log("tidak bisa save");
      } else {
        history.push("/checkout");
        return console.log("bisa save");
      }
    } else if(status === 'modal') {
      setModalValidasi(true)
    } else if(status === 'error') {
      error()
    }
  };

 
  return (
    <>
    <Modal visible={modalValidasi} onCancel={() => setModalValidasi(false)} footer={null}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '30vh',}}>
      <h3>
      choose measurement option
      </h3>
      <div>
      <Button style={{marginRight: 10}}>Manual</Button>
      <Button>Standard</Button>
      </div>
      {JSON.stringify(dataCustom)}
      </div>
    </Modal>
     <Modal visible={modalLogin} onCancel={() => setModalLogin(false)}>
        <FormLogin />
      </Modal>
      <Row justify="center">
        <h2>Measurement Options</h2>
      </Row>
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
              setManualView(true)
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
      <Row justify="center" style={{marginTop: 30}}>
        <Button style={{width: 200}}
        onClick={onSave}
        >Save</Button>
      </Row>

      
        <StandardSizing 
        viewModal={viewModal}
        setViewModal={setViewModal}
        dataCustom={dataCustom}
        params={params}
        {...props}
        />
        
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
