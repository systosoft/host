import React, {useState} from "react";
import { Container, Col, Row, Navbar, Button } from "react-bootstrap";
import Logincontainer from "logincontainer/Logincontainer";
//import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
//import UserPool from "./UserPool";
//import { useHistory } from "react-router-dom";
// import { Redirect  ,Switch,PrivateRoute} from "react-router-dom";
// import RootPage from "./RootPage";

export default function Login(){
    // const [passwordType, setpasswordType] = useState("password");
    // const [passwordText, setpasswordText] = useState("Show");

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const [loggedIn,setLoggedIn]=useState(true);

    // let history = useHistory();

    // const onSubmit = (event) => {
    //     event.preventDefault();
    
    //     const user = new CognitoUser({
    //       Username: email,
    //       Pool: UserPool,
    //     });
    
    //     const authDetails = new AuthenticationDetails({
    //       Username: email,
    //       Password: password,
    //     });
    
    //     user.authenticateUser(authDetails, {
    //         onSuccess: (data) => {
    //         console.log("onSuccess: ", data);
    //             // window.location="http://ssf.betaphase.in/";
    //             let authtoken = data['accessToken']['jwtToken'];
    //             localStorage.setItem("auth",authtoken)
    //             // setLoggedIn(false);

    //             history.push("/rootpage");
    //             // window.location.href = "/dashboard";
    //         },
    //         onFailure: (err) => {
    //             console.error("onFailure: ", err);
    //         },
    //         newPasswordRequired: (data) => {
    //             console.log("newPasswordRequired: ", data);
                
    //         },
    //     });
    // };

    // const handleToggle = () => {
    //     if(passwordType === 'password'){
    //         setpasswordType('text');
    //         setpasswordText('Hide');
    //     }else{
    //         setpasswordType('password');
    //         setpasswordText('Show');
    //     }
    // }

    const [border, setBorder] = useState("#fafafa");
    const appStyles = {
        border: `2px solid ${border}`,
    };
    const styles = {
        width: "100px",
        fontSize: "20px",
        borderRadius: "40px",
        border: "1px solid black",
        color: "white",
        margin: "0.5em 1em",
        padding: "0.25em 1em",
        background: "#c83f49",
    };

    return(
        <React.Fragment>
            <Navbar aria-controls="responsive-navbar-nav">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src="./img/karuna-trust-logo.png" className="logo" alt="karuna-trust-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        
                        English | <a className="link" href="">ಕನ್ನಡ</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="login">
                <Row>
                    <Col xs="8" className="left" style={appStyles}>
                        <i className="bi bi-back" id="icon2" onMouseEnter={() => setBorder("#c83f49")}
                        onMouseLeave={() => setBorder("#fafafa")}>{" "}</i>
                        <div className="imagedivision">
                            <img src="./img/gwalk-01-01-01.png" className="img-fluid" alt="gwalk" />
                        </div>
                    </Col>
                    <Col xs="4" className="loginscreen">
                        <Logincontainer />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}