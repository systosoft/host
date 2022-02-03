import React from "react";
import "./css/Modal.css";
import {Button} from "react-bootstrap";

export default function Logout({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h4 className="logout-head">Logout</h4>
        </div>
        <div className="body">
          <img src="./img/logout-svg-walkout.png" className="rounded"/>
        </div>
        <div className="footer">
          <Button variant="outline-secondary" onClick={() => {setOpenModal(false);}}>
            Cancel
          </Button>
          <Button variant="secondary" href="/">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}