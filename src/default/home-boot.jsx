import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Jumbotron,
  Row,
  Grid,
  Col,
  Image,
  Button
} from "react-bootstrap";
import "./../stylesheet/home.css";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Image src="assets/alex-martinez.jpg" fluid />
        </Row>
        <Row>
          <Col />
        </Row>
        <Row />
        {/* <Jumbotron>
                <h2>Velkommen til home</h2>
                <Link to="/Omoss">
                    <Button bsstyle="secondary">Omoss</Button>
                </Link>
            </Jumbotron> */}
      </Container>
    );
  }
}

export default Home;
