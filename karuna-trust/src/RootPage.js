import React, {useEffect, useState} from "react";
//import ReactDOM from "react-dom";
import Mainheader from "mainheader/Mainheader";
import Dashboard from "./Dashboard";
import GeneratedIds from "./GeneratedIds";
import Sidemenus from "./Sidemenus";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "footer/Footer";
import {BrowserRouter as Router, Routes, Route,Switch} from "react-router-dom";
import "./index.scss";
import "./css/Login.css";
import Login from "./Login";

export default function RootPage(){

    const [modalOpen, setModalOpen] = useState(false);
    // const [logout,setLogout] = useState(false);
    // console.warn(localStorage.getItem('login'))

    return(
        <React.Fragment>
            {
                modalOpen ? <Route path="/logout" exact><Logout /></Route> : ""
            }
           
                <Mainheader />
                <Router>
                    <React.Fragment>
                        <Container fluid>
                            <Row>
                                <Col md={2}> 
                                    <Sidemenus />
                                </Col>
                                <Col md={10}>
                                    <Switch>
                                      <Route path="/dashboard" exact><Dashboard /></Route>
                                        <Route path="/generatedids" exact><GeneratedIds /></Route>
                                    </Switch>
                                </Col>
                            </Row>
                        </Container>
                    </React.Fragment>
                </Router>
                <Footer />
          
        </React.Fragment>
    );
}