import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/index.css";
import App from "./App";
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render( 
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, 
document.getElementById("root"));

serviceWorker.register();

