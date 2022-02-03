import React, { useState } from "react"
import './css/Sidemenu.css'
import Sidemenu from "./Sidemenus";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Button, Col, Modal, Row } from 'react-bootstrap';

function GeneratedIds() {
  const [border, setBorder] = useState("#fafafa");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const appStyles = {
    border: `2px solid ${border}`,

    position: 'fixed',
    overflow: 'hidden',
    // top: '15%'

  };

  const Vicon = {
    justifyContent: 'end',
    position: 'relative',
    marginLeft: '70%',

    fontSize: '30px',
    justifyContent: 'end',
    float: 'right'
  }
 

  var popUpObj;
  function showModalPopUp() {
    popUpObj = window.open("http://healthidsbx.ndhm.gov.in/facility?requestId=123456&customCode=s3de",
      "idModalPopUp",
      "toolbar=no," +
      "scrollbars=yes," +
      "location=no," +
      "statusbar=no," +
      "menubar=no," +
      "directories=no," +
      "resizable=no," +
      "width=600," +
      "height=800," +
      "left=100," +
      "top=100," +
      "copyhistory=no"
    );
    popUpObj.focus();
    
    getdata(popUpObj)
   
  }
  function getdata(popUpObj)
  {
    console.warn(popUpObj)

  }
  


  return (
    <>
      <div className="container dash-container" style={appStyles}>

        <div className="row">
          <div className="col-12 ">

            <h1 className="top-100">View / Generate Health ID</h1>
          </div>
        </div>
        <div className="row">
          <div col={12}>
            <div className="buttonregister">

              <Button variant="primary" onClick={showModalPopUp}>Generate Via Aadhar </Button>

            </div>

          </div>

        </div>
        <div className="arrow-img row">
          <div col={12}>
            <div>< img src="./img/arrow-point-gen-via-aadhaar.png" /></div>
            <div><p className="pr-10">Click to generate health Id</p>
            </div>
          </div>
        

        </div>
        {/* <div className="row ">
              <div className="col-12">
                  Health IDs generated by you will be <br></br> visible here
              </div>
             </div> */}
        <div className="row ">
          <div className="col-sm-4"></div>
          <div className="col-4">
            Health IDs generated by you will be <br></br> visible here
            <img src="./img/info-card.png" />
            Currently there are no health ids’ to show
            <div style={{ width: '50%' }}>

              <i className="bi bi-back Vicon" style={Vicon} onMouseEnter={() => setBorder("#31b347")} onMouseLeave={() => setBorder("#fafafa")}></i>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
        {/* <div className="row ">
             <div className="col-12">
             Currently there are no health ids’ to show
              </div>
             </div> */}

      </div>
    </>
  );
}

export default GeneratedIds;
