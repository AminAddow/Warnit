import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "./../../firebase";
// import "./../../stylesheet/customnavbar.css";

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar
          className="navbar-static-top navbar-custom primary"
          collapseOnSelect
          expand="md"
        >
          <Navbar.Brand className="navbar-brand">
            <Link to="/">Warnit</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {this.props.authenticated ? (
                <Link to="/Workspace">
                  <NavItem className="navbar-text nav-link">Workspace</NavItem>
                </Link>
              ) : (
                <div />
              )}
              <Link to="/Ressurser">
                <NavItem className="navbar-text nav-link">Ressurser</NavItem>
              </Link>
              <Link to="/Omoss">
                <NavItem className="navbar-text nav-link">Om Oss</NavItem>
              </Link>
              <Link to="/AdminPage">
                <NavItem className="navbar-text nav-link">Admin</NavItem>
              </Link>

              {this.props.authenticated ? (
                <Link to="/">
                  <NavItem
                    className="navbar-text nav-link"
                    onClick={() => {
                      firebase.auth().signOut();
                    }}
                  >
                    Logg ut <b>{this.props.name}</b>
                  </NavItem>
                </Link>
              ) : (
                <Link to="/Login">
                  <NavItem className="navbar-text nav-link">Login</NavItem>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
