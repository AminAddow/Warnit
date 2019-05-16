import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import firebase from "./../../firebase";
// import './../../../stylesheet/customnavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="navbar-static-top navbar-custom primary"
          collapseOnSelect
        >
          <Navbar.Brand className="navbar-brand">
            <Link to="/">Warnit</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav pullright="true" className="">
              {this.props.authenticated ? (
                <Link to="/Workspace">
                  <NavItem className="navbar-text nav-link">Workspace</NavItem>
                </Link>
              ) : (
                <div />
              )}
              <Link to="/Dokumenter">
                <NavItem className="navbar-text nav-link">Dokumenter</NavItem>
              </Link>
              <Link to="/Omoss">
                <NavItem className="navbar-text nav-link">Om Oss</NavItem>
              </Link>
              <Link to="/Questionset">
                <NavItem className="navbar-text nav-link">
                  Spørsmålssett
                </NavItem>
              </Link>
              {this.props.authenticated ? (
                // <div className="justify-content-end"><p>User is logged in</p></div>
                <NavItem
                  className="navbar-text nav-link ml-auto"
                  onClick={() =>
                    firebase
                      .auth()
                      .signOut()
                      .then(function() {
                        return <Redirect to="/" />;
                      })
                  }
                >
                  Logg ut {this.props.user}
                </NavItem>
              ) : (
                <Link to="/Login">
                  <NavItem className="navbar-text nav-link ml-auto">
                    Login
                  </NavItem>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
