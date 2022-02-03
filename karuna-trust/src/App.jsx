import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
// import Root from "./Root";

import './css/Sidemenu.css'

import Mainheader from "mainheader/Mainheader";
import Dashboard from "./Dashboard";
import GeneratedIds from "./GeneratedIds";
import Sidemenus from "./Sidemenus";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "footer/Footer";
import {BrowserRouter as Router, Routes, Route, Link,Switch} from "react-router-dom";
import RootPage from "./RootPage";

import "./index.scss";
import "./css/Login.css";
import "./css/mainheader.css";

const App = () => (
 


  <React.Fragment>
   
    
      <Router>
        <Switch>
          {
            localStorage.getItem('login')?
            <>
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
                              
                                <Route exact path="/dashboard" ><Dashboard /></Route>
                                <Route exact path="/generatedids" ><GeneratedIds /></Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        </Router> <Footer />
       </>:
       <Router>
       <Route exact path="/login" ><Login/> </Route>
       <Route exact path="/dashboard" ><Login/></Route>
       <Route exact path="/generatedids" ><Login /></Route>
       <Route exact path="/rootpage" ><Login /></Route>
       <Route exact path="/" ><Login /></Route>
       <Footer />
       </Router>
     
          }
          
          
        </Switch>
      </Router>
     
     
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
