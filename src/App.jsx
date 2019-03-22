import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";
import logo from "./stylesheet/svg/logo.svg";
import "./stylesheet/App.css";
// import Workspace from './components/shared/workspace.js';
// import Login from './components/shared/login.js';
// import Home from './components/shared/home.js';
// import Omoss from './components/shared/omoss.js';
// import Dokumenter from './components/shared/dokumenter.js';
// import AppAppBar from './components/shared/navigation/AppAppBar.js';
import AppRouter from './components/shared/navigation/router';

// Her kaller vi på Router som er i './components/shared/navigation/router'.


function App(){
    return(
        <AppRouter />
    )
}

export default AppRouter;
