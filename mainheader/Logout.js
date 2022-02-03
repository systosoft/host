import React, { useState } from "react";
import { Button, Container, Modal, Row, Col} from "react-bootstrap";
import "./css/mainheader.css";

export default function Logout(){
    return(
        <Container>
            <Row>
                <Col>
                    <h4 className="logout-head">Logout</h4>
                </Col>
            </Row>
            <Row>
                <Col className="img-logout">
                    <img src="./img/logout-svg-walkout.png" className="rounded"/>
                </Col>
            </Row>
            <Row>
                <Col className="col-log">
                    <p className="log-text">
                        Are you sure you want to logout ?
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="btn1">
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Col>
                <Col className="btn2">
                    <Button variant="secondary" href="/">
                        Logout
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}