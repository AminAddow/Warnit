import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './../../../stylesheet/customnavbar.css';


export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar-static-top navbar-custom primary" collapseOnSelect>
                        <Navbar.Brand className="navbar-brand">
                            <Link to="/">Warnit</Link>
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                        <Nav pullRight className="justify-content-end mr-auto">
                            <Link to="/">
                                <NavItem className="navbar-text nav-link" eventkey="1" componentclass={Link}>
                                Hjem
                                </NavItem>
                            </Link>
                            <Link to="/Omoss">
                                <NavItem className="navbar-text nav-link" eventKey="2" componentclass={Link}>
                                Om Oss
                                </NavItem>
                            </Link>
                            <Link to="/Workspace">
                                <NavItem className="navbar-text nav-link" eventKey="3" componentclass={Link}>
                                Workspace
                                </NavItem>
                            </Link>
                            <Link to="/Dokumenter">
                                <NavItem className="navbar-text nav-link" eventKey="4" componentclass={Link}>
                                Dokumenter
                                </NavItem>
                            </Link>
                                {this.props.authenticated ? (
                                    <div className="justify-content-end"><p>User is logged in</p></div>
                            ) : (   <Link to="/Login">
                                        <NavItem className="navbar-text nav-link" eventKey="5" componentclass={Link}>
                                            Login
                                        </NavItem>
                                    </Link>)}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
