import React, { useState } from "react"
import { Button, Modal, Navbar, NavDropdown, Container, Row, Col} from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { Redirect, useHistory } from "react-router-dom";
import "./css/mainheader.css";

export default function Mainheader(){
    const [border, setBorder] = useState("#fafafa");
    const history=useHistory();

    const appStyles = {
        border: `2px solid ${border}`,
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function logout()
    {    
        localStorage.clear()
    }

    return(
        <Container fluid >
            <Navbar collapseOnSelect expand="lg" fixed="top" className="header " style={appStyles}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home" >
                        <img src="./img/Logo.png" className="d-inline-block logo img-fluid" />
                    </Navbar.Brand>
                    <div style={{width: '50%'}}>
                        <i className="bi bi-back" style={{fontSize: '30px', justifyContent: 'end', float: 'right'}} onMouseEnter={() => setBorder("#31b347")} onMouseLeave={() => setBorder("#fafafa")}></i>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="" activeKey="/home">
                            <Nav.Item >
                            <Nav.Link href="" className="admin-tag">Krishna Kumar<br/> Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="" ><img className="admin-img" src="./img/admin.png" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="">
                                <NavDropdown id="navbarScrollingDropdown" className="arrow-dn">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="logout">
                            <Nav.Link onClick={handleShow} className="logut-tag"> Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Container>
                    <Row>
                        <Col>
                            <h4 className="logout-head">Logout</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="logout-img">
                            <img src="./img/logout-svg-walkout.png" className="rounded"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
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
                            <Button variant="secondary" onClick={logout} href='/login'>
                                Logout
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal>
    </Container>
    );
}