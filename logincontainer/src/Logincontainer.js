import React, {useState} from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./css/Login.css";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";


export default function Logincontainer(){
    const [passwordType, setpasswordType] = useState("password");
    const [passwordText, setpasswordText] = useState("Show");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login,setLogin]=useState(false);

    let history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault();
    
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
    
        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: password,
        });
    
        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
            console.log("onSuccess: ", data);
                // window.location="http://ssf.betaphase.in/";
                let authtoken = data['accessToken']['jwtToken'];
                localStorage.setItem("login",JSON.stringify({login:true,token:"nagesh"}));
                localStorage.setItem("auth",authtoken);
                // setLoggedIn(false);

                // history.push("/rootpage");
                window.location.href = "/rootpage";
            },
            onFailure: (err) => {
                console.error("onFailure: ", err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
                
            },
        });
    };

    const handleToggle = () => {
        if(passwordType === 'password'){
            setpasswordType('text');
            setpasswordText('Hide');
        }else{
            setpasswordType('password');
            setpasswordText('Show');
        }
    }

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
        <Container style={appStyles}>
            <Row>
                <Col>
                    <h4>
                        Registered User Login
                    </h4>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Username" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <div className="input-cont">
                                <input type={passwordType} value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required/>
                                <a className="button" onClick={handleToggle} style={{cursor: "pointer"}}>
                                    {passwordText}
                                </a>
                            </div>
                        </div>
                        <div className="mb-3 btn">
                            <Button type="submit" className="btn btn-primary">Login</Button>
                        </div>
                    </form>
                   
                </Col>
            </Row>
        </Container>
    );
}