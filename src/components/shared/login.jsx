import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import "./../../stylesheet/App.css";
import firebase from "./../../firebase";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const auth = firebase.auth();

function createUser(user){
    console.log(user);

    auth.createUserWithEmailAndPassword(user.email, user.pass).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...;
      console.log("Code: ", errorCode);
      console.log("Message: ", errorMessage);


});

return "ok";
};





class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {email: '',
                    pass:''
                };

      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
  };

loggingin(){
        console.log("Start")
    };

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
};




    render(){
        return(
            <div>
                <Container fluid className="d-flex">
                    <Row  className="mt-5 mx-auto">
                        <Col>
                            <Card className="justify-content-center" style={{ width: '20rem' }}>
                                <Card.Body>
                                    <Form onSubmit="this.handleSubmit">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Epost" value={this.state.email} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" value={this.state.pass} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    };
}

export default Login;
