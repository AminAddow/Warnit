import React, { Component } from 'react';
// import "./../../stylesheet/App.css";
import firebase from "./../../firebase";
import LoginUser from "./views/loginUser";
import Loginui from "./views/loginui";

// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



class Login extends Component {

    render(){
        return(
            <div>
                <Container fluid className="d-flex">
                    <Row  className="mt-5 mx-auto">
                        {/* <Loginui /> */}
                        <LoginUser />
                    </Row>
                </Container>
            </div>
        )
    };
}

export default Login;
