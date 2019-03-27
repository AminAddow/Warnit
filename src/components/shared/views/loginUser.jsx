import React, { Component } from 'react';
// import "./../../stylesheet/App.css";
import firebase from "./../../../firebase";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class LoginUser extends Component {
    constructor(props) {
      super(props);
      this.state = {email: '',
                    pass:''
                };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };


  signInUser() {
      const auth = firebase.auth();
      console.log("----SignIn-----");

  //     auth.signInWithEmailAndPassword(null, null).catch(function(error) {
  //       // Handle Errors here.
  //       let errorCode = error.code;
  //       let errorMessage = error.message;
  //       // ...;
  //       console.log("Code: ", errorCode);
  //       console.log("Message: ", errorMessage);
  //     //
  //
  // });

  // return "ok";
  };


  handleChange(event){
    const target = event.target;
    const value = target.type === 'pass' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    };

    handleSubmit(event) {
      console.log(this.state.email);
      console.log(this.state.pass);
      event.preventDefault();


    };

    render(){
        return(
            <div>
                <Col>
                    <Card className="justify-content-center" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Epost" checked={this.state.email} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="pass" placeholder="Password" value={this.state.pass} onChange={this.handleChange} />
                                </Form.Group>
                                <Button variant="primary" value= "sumbit" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    };
}

export default LoginUser;
